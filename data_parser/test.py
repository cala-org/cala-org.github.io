from bs4 import BeautifulSoup
file = open('https://retired.cala-web.org/node/2491', 'rb') 
html = file.read() 
bs = BeautifulSoup(html,"html.parser") # 缩进格式