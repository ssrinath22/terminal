import { invoke } from '@tauri-apps/api/tauri'

const executeCommand = async (command: string): Promise<string> => {
    try {
        const result:string = await invoke('execute_shell_command', { command: command})
        // console.log(result)
        return result
    } catch (error) {
        console.error(error)
        return `Error: ${error}`
    }
}
const executeInteractiveCommand = async (command: string, args: string[] = []): Promise<string> => {
    try {
        const result: string = await invoke('run_command', { command, args })
        return result
    } catch (error) {
        return `Error: ${error}`
    }
}

export { executeCommand, executeInteractiveCommand }