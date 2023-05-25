const ui = SpreadsheetApp.getUi()

const onOpen=()=>{
  ui.createMenu('オリジナルメニュー')
    .addItem('サイドバーを表示','showSidebar')
    .addToUi()
}

const showSidebar=()=>{
  const html = HtmlService.createTemplateFromFile('src/main')
  html.page='sidebar'
  ui.showSidebar(html.evaluate())
}

const showModal=()=>{
  const html = HtmlService.createTemplateFromFile('src/main')
  html.page='sidebar'
  ui.showModalDialog(html.evaluate(),'確認')
}