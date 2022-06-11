export const CustomHmr = () => {
    return {
        name: 'custom-hmr',
        enforce: 'post',
        // HMR
        handleHotUpdate({ file, server }: { file: string; server: any }) {
            if (file.endsWith('.json')) {
                server.ws.send({
                    type: 'full-reload',
                    path: '*'
                });
            }
        },
    }
}