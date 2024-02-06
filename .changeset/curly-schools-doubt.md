---
"@nerdfish/ui": patch
---

`Multi-Email` improvements:
- Added `onBlur` event to `MultiEmail` component
- Added emails are now editable by clicking on them
- `Backspace` key now edits the last email in the list, instead of deleting it
- Some minor styling improvements
- Allow `Name <name@domain.com>` to be added as an email. This will be clipped to only the email address when added.
- Allow a list of emails to be pasted into the input
