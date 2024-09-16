import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Adjust the path based on your project structure

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  description: string;
  triggerText: string;
  children?: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  description,

  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>
      </DialogTrigger>
      <DialogContent>
        {children && <div>{children}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
