/**
 * Electron - Processo principal
 * @author Wellington R. Cruz
 */

console.log("Electron - Processo principal")

// Importação dos recursos do framework
// App (aplicação)
// BrowserWindow (criação da janela)
const { app, BrowserWindow } = require('electron/main')

// Janela principal
let win
const createWindow = () => {
  win = new BrowserWindow({
    width: 1010, 
    height: 720,
    //frame: false
    //resizable: false,
    //minimizable: false,
    //closable: false,
    //autoHideMenuBar: true
  })

// Carregar documento HTML na janela
  win.loadFile('./src/views/index.html')
}

// Inicialização da  (assíncronismo)
app.whenReady().then(() => {
  createWindow()

// Só ativar a janela principal se nenhuma outra estiver ativa
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Se o sistema não for MAC encerrar a aplicação quando a janela for fechada
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})