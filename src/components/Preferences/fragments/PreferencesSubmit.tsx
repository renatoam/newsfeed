"use client"

import { setPreferences } from "../Preferences.helpers";

export default function PreferencesSubmit() {
  return (
    <div className="modal-action items-center justify-between">
      <small>Press <kbd className="kbd kbd-sm">ESC</kbd> to close without saving.</small>
      <button
          type="submit"
          className="btn btn-primary"
          onClick={setPreferences}
        >Save preferences</button>
    </div>
  );
}
