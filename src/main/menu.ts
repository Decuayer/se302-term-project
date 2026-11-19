/**
 * @file menu.ts
 * @module main
 *
 * Responsibility: Native application menu (File, View, Help) built with the Electron
 * Menu API. Menu items that open renderer screens are forwarded as MenuCommand
 * events over IPC; About is shown as a native dialog.
 *
 * Owner: Demir Cücü (Electron Platform & IPC) - D1-2
 * References: docs/md/description.md (help menus), SRS FR-14, Sec. 6 step 6
 */
import type { BrowserWindow, Menu, MenuItemConstructorOptions } from 'electron'
import { NotImplementedError } from '../shared/errors'
import type { MenuCommand } from '../shared/ipcTypes'

/**
 * Builds the application menu for `mainWindow`.
 * Expected items: File (Import Data, Exit), View (Reload, Toggle DevTools in development),
 * Help (User Guide, About).
 */
export function buildApplicationMenu(mainWindow: BrowserWindow): Menu {
  // TODO [D1-2 | Demir Cücü]: Build the template with buildMenuTemplate and return
  // Menu.buildFromTemplate(template). main.ts must then call Menu.setApplicationMenu.
  // Acceptance: Help > User Guide opens the in-app guide; the menu is visible on Windows.
  throw new NotImplementedError('D1-2')
}

/** Menu template; separated from buildApplicationMenu so it can be unit tested. */
export function buildMenuTemplate(
  sendCommand: (command: MenuCommand) => void,
  isDevelopment: boolean,
): MenuItemConstructorOptions[] {
  // TODO [D1-2 | Demir Cücü]: Return the File / View / Help template. Help > User Guide calls
  // sendCommand('open-help'); File > Import Data calls sendCommand('open-import').
  throw new NotImplementedError('D1-2')
}

/** Shows the About dialog with product name, version, team and course information. */
export function showAboutDialog(mainWindow: BrowserWindow): void {
  // TODO [D1-2 | Demir Cücü]: Use dialog.showMessageBox with app.getName(), app.getVersion(),
  // "SE302 Section 1 - Team 11" and the team member list.
  throw new NotImplementedError('D1-2')
}
