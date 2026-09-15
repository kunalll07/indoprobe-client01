"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, X } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { buildEmailUrl, buildWhatsAppUrl } from "@/lib/contact-links";

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/75 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border border-gold-500/20 bg-navy-900 p-6 shadow-premium sm:p-8"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full p-1.5 text-offwhite/60 transition-colors hover:bg-white/10 hover:text-offwhite"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              INDOPROBE
            </p>
            <h3
              id="contact-modal-title"
              className="mt-2 font-display text-2xl text-offwhite"
            >
              Request a Confidential Consultation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-offwhite/70">
              Choose how you would like to contact INDOPROBE.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-navy-950 transition-transform duration-200 hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Continue on WhatsApp
              </a>

              <a
                href={buildEmailUrl()}
                onClick={closeModal}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400/60 bg-transparent px-6 py-3 text-sm font-semibold text-gold-300 transition-colors duration-200 hover:bg-gold-500/10"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>

              <button
                type="button"
                onClick={closeModal}
                className="mt-1 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-offwhite/50 transition-colors hover:text-offwhite/80"
              >
                Close
              </button>
            </div>

            <p className="mt-5 text-[11px] leading-relaxed text-offwhite/40">
              Please avoid sharing highly sensitive case details until a confidential
              conversation has been established.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
