export default function postMessage(payload: any) {
    parent.postMessage({
        pluginMessage: {
            ...payload,
        }
    }, '*')
}