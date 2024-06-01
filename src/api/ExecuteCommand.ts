import { invoke } from '@tauri-apps/api/tauri'

let outputCallback: ((output: string) => void) | null = null

export const setOutputCallback = (callback: (output: string) => void) => {
    outputCallback = callback
}

export const executeCommand = async (command: string) => {
    await invoke('execute_command', { command })
}

export const dummyExecuteCommand = (command: string) => {
        return `Command executed: ${command}`
}

window.addEventListener('tauri://update-output', (event: any) => {
    if (outputCallback) {
        outputCallback(event.payload)
    }
})