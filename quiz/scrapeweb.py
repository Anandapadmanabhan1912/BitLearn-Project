from bs4 import BeautifulSoup
import requests

url = "https://www.gktoday.in/quizbase/india-government-politics-current-affairs?pageno=4"
response = requests.get(url)

soup = BeautifulSoup(response.text,'html.parser')
results = soup.find_all('div',attrs = {'class':'wp_quiz_question testclass'})
print(results)
options = soup.find_all('div', attrs = {'class':"wp_quiz_question_options"})

for i in results:
	print(i,"\n")
for i in options:
	listop = i.get_text().split("[")
	for p in listop:
		print(p)
