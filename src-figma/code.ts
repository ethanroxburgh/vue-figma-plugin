figma.showUI(__html__, { height: 300 });

figma.ui.onmessage = message => {
    console.log(message)
}