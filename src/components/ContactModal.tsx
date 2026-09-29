import React, { useState } from 'react';
import { ContactFormData, ContactFormErrors } from '../types';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useLenisLock } from '../hooks/useLenisLock';
import { useLanguage } from '../i18n/LanguageContext';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onShowToast: (message: string) => void;
  readonly triggerElement?: HTMLElement | null;
}

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  company: '',
  service: 'creatividad',
  region: 'argentina',
  budget: '25k-50k',
  message: '',
};

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
  triggerElement,
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Focus trap hook ensures keyboard trap and focus restoration to trigger
  const modalRef = useFocusTrap(isOpen, onClose, triggerElement);
  useLenisLock(isOpen);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: ContactFormErrors = {};

    if (!formData.name.trim()) {
      errs.name = t.contactModal.validation.nameRequired;
    }

    if (!formData.email.trim()) {
      errs.email = t.contactModal.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.contactModal.validation.emailInvalid;
    }

    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = t.contactModal.validation.messageRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      onClose();
      onShowToast(t.contactModal.successToast);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-primary/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="w-full max-w-2xl bg-surface border border-primary flex flex-col overflow-hidden shadow-[8px_8px_0px_var(--color-primary)] max-h-[92vh] focus:outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-space-md py-space-sm border-b border-outline-variant bg-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary-container" aria-hidden="true" />
            <span className="font-mono text-label-sm font-bold uppercase tracking-wider text-primary">
              {t.contactModal.titleHeader}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-primary hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
            aria-label={t.contactModal.closeAria}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form
          onSubmit={handleSubmit}
          noValidate
          data-lenis-prevent
          className="p-space-md lg:p-space-lg overflow-y-auto space-y-space-md"
        >
          <div>
            <h2
              id="contact-modal-title"
              className="font-headline text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter font-extrabold text-primary"
            >
              {t.contactModal.headline}
            </h2>
            <p className="font-body text-body-sm text-on-surface-variant mt-1">
              {t.contactModal.subhead}
            </p>
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div>
              <label
                htmlFor="name"
                className="font-mono text-label-sm uppercase text-on-surface-variant block mb-1"
              >
                {t.contactModal.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder={t.contactModal.namePlaceholder}
                className={`w-full bg-surface-container text-on-surface px-3 py-2.5 font-mono text-sm border focus:outline-none focus:border-secondary-container ${
                  errors.name ? 'border-red-600' : 'border-outline-variant'
                }`}
              />
              {errors.name && (
                <span className="font-mono text-[11px] text-red-500 mt-1 block">
                  {errors.name}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-mono text-label-sm uppercase text-on-surface-variant block mb-1"
              >
                {t.contactModal.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder={t.contactModal.emailPlaceholder}
                className={`w-full bg-surface-container text-on-surface px-3 py-2.5 font-mono text-sm border focus:outline-none focus:border-secondary-container ${
                  errors.email ? 'border-red-600' : 'border-outline-variant'
                }`}
              />
              {errors.email && (
                <span className="font-mono text-[11px] text-red-500 mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Company & Region Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div>
              <label
                htmlFor="company"
                className="font-mono text-label-sm uppercase text-on-surface-variant block mb-1"
              >
                {t.contactModal.companyLabel}
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder={t.contactModal.companyPlaceholder}
                className="w-full bg-surface-container text-on-surface px-3 py-2.5 font-mono text-sm border border-outline-variant focus:outline-none focus:border-secondary-container"
              />
            </div>

            <div>
              <label
                htmlFor="region"
                className="font-mono text-label-sm uppercase text-on-surface-variant block mb-1"
              >
                {t.contactModal.regionLabel}
              </label>
              <select
                id="region"
                value={formData.region}
                onChange={(e) =>
                  setFormData({ ...formData, region: e.target.value })
                }
                className="w-full bg-surface-container text-on-surface px-3 py-2.5 font-mono text-sm border border-outline-variant focus:outline-none focus:border-secondary-container"
              >
                <option value="argentina">{t.contactModal.regions.argentina}</option>
                <option value="mexico">{t.contactModal.regions.mexico}</option>
                <option value="colombia">{t.contactModal.regions.colombia}</option>
                <option value="brasil">{t.contactModal.regions.brasil}</option>
                <option value="usa">{t.contactModal.regions.usa}</option>
              </select>
            </div>
          </div>

          {/* Service & Budget Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div>
              <label
                htmlFor="service"
                className="font-mono text-label-sm uppercase text-on-surface-variant block mb-1"
              >
                {t.contactModal.serviceLabel}
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full bg-surface-container text-on-surface px-3 py-2.5 font-mono text-sm border border-outline-variant focus:outline-none focus:border-secondary-container"
              >
                <option value="estrategia">{t.contactModal.services.estrategia}</option>
                <option value="creatividad">{t.contactModal.services.creatividad}</option>
                <option value="social">{t.contactModal.services.social}</option>
                <option value="pr">{t.contactModal.services.pr}</option>
                <option value="experiencias">{t.contactModal.services.experiencias}</option>
                <option value="audiovisual">{t.contactModal.services.audiovisual}</option>
                <option value="integral">{t.contactModal.services.integral}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="font-mono text-label-sm uppercase text-on-surface-variant block mb-1"
              >
                {t.contactModal.budgetLabel}
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full bg-surface-container text-on-surface px-3 py-2.5 font-mono text-sm border border-outline-variant focus:outline-none focus:border-secondary-container"
              >
                <option value="15k-25k">{t.contactModal.budgets.b15k}</option>
                <option value="25k-50k">{t.contactModal.budgets.b25k}</option>
                <option value="50k-100k">{t.contactModal.budgets.b50k}</option>
                <option value="100k+">{t.contactModal.budgets.b100k}</option>
              </select>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="font-mono text-label-sm uppercase text-on-surface-variant block mb-1"
            >
              {t.contactModal.messageLabel}
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder={t.contactModal.messagePlaceholder}
              className={`w-full bg-surface-container text-on-surface px-3 py-2.5 font-mono text-sm border focus:outline-none focus:border-secondary-container ${
                errors.message ? 'border-red-600' : 'border-outline-variant'
              }`}
            />
            {errors.message && (
              <span className="font-mono text-[11px] text-red-500 mt-1 block">
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-space-sm border-t border-outline-variant">
            <span className="font-mono text-[11px] text-on-surface-variant uppercase">
              {t.contactModal.ndaNote}
            </span>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-primary text-on-primary font-mono text-label-md uppercase tracking-wider px-space-xl py-3.5 hover:bg-secondary-container hover:text-on-secondary transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>{t.contactModal.sending}</span>
              ) : (
                <>
                  <span>{t.contactModal.submit}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
