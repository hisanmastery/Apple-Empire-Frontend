import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Adjust the path based on your project structure

interface ModalProps {
  isOpen: boolean;
  title?: string;
  setIsOpen: (open: boolean) => void;
  children?: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="min-w-[800px]">
        <DialogHeader className="border-b-[1px] border-_primary pb-2">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children && <div>{children}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
