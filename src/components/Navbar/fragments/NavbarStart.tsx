import { Modal, Preferences } from "@/components";

export default function NavbarStart() {
  return (
    <div className="navbar-start">
      <Modal
        title="Set your preferences"
        triggerText="Set preferences"
      >
        <Preferences />
      </Modal>
    </div>
  );
}
