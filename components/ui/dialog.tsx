'use client';
import { Dialog } from '@base-ui/react/dialog';
import { Button } from './button';
export function PreviewDialog({
  title,
  description,
  triggerLabel,
  children,
  wide = false,
}: {
  title: string;
  description: string;
  triggerLabel: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={<Button variant="outline" className="preview-trigger" />}
      >
        {triggerLabel}
        <span aria-hidden="true">↗</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="dialog-backdrop" />
        <Dialog.Popup className={`preview-dialog ${wide ? 'dialog-wide' : ''}`}>
          <div className="dialog-heading">
            <div>
              <p className="eyebrow">EXPLORE THE WORK</p>
              <Dialog.Title>{title}</Dialog.Title>
            </div>
            <Dialog.Close
              render={<Button variant="ghost" size="icon" />}
              aria-label="Close preview"
            >
              ×
            </Dialog.Close>
          </div>
          <Dialog.Description className="dialog-description">
            {description}
          </Dialog.Description>
          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
