class WebSocketClient {
    private socket: WebSocket

    constructor(url: string) {
        this.socket = new WebSocket(url)
        this.initializeConnection()
    }

    private initializeConnection(): void {
        this.socket.addEventListener('open', this.handleOpen)
        this.socket.addEventListener('message', this.handleMessage)
        this.socket.addEventListener('close', this.handleClose)
        this.socket.addEventListener('error', this.handleError)
    }

    private handleOpen = (event: Event): void => {
        console.log('Connected to the server')
    }

    private handleMessage = (event: MessageEvent): void => {
        console.log('Message from server:', event.data)
    }

    private handleClose = (event: CloseEvent): void => {
        console.log('Disconnected from the server')
    }

    private handleError = (event: Event): void => {
        console.error('WebSocket error:', event)
    }

    public sendCommand(command: string): void {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({ command }))
        } else {
            console.error('WebSocket is not open. Unable to send command.')
        }
    }

    public closeConnection(): void {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.close()
        }
    }
}

export default WebSocketClient