from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import mysql.connector

app = Flask(__name__)

#ALLOWED_ORIGINS = ['localhost','127.0.0.1']

#cors = CORS(app, resources={"/*": {"origins": ALLOWED_ORIGINS}})

CORS(app)


mydatabase= mysql.connector.connect(
    host="localhost",
    user="root",
    password="Password@23",
    database="sys"
   
)
mycursor = mydatabase.cursor()

        
      
@app.route('/add', methods=['GET','POST'])
def add_survey():
    data = request.json

    surname = data['surname']
    firstname = data['firstname']
    contact = data['contact']
    date_entry = data['date_entry']
    age = data['age']
    pizza = data['pizza']
    pasta = data['pasta']
    papwors = data['papwors']
    chicken = data['chicken']
    beef = data['beef']
    other = data['other']
    eatOut = data['eatOut']
    watchMovie = data['watchMovie']
    tv = data['tv']
    listenRadio = data['listenRadio']

    mycursor = mydatabase.cursor()

    
    sql = "INSERT INTO `sys`.`usersurvey` (surname, firstname, contact, date_entry, age, pizza, pasta, papwors, chicken, beef, other, eatOut, watchMovie, tv, listenRadio) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    values = (surname, firstname, contact, date_entry, age, pizza, pasta, papwors, chicken, beef, other, eatOut,watchMovie, tv, listenRadio  )
    mycursor.execute(sql, values)
    mydatabase.commit()
   
    

    return ("Survey successfully added to the database")



    

@app.route('/get', methods=['GET'])
@cross_origin(supports_credentials=True)
def users():
    
    mycursor = mydatabase.cursor()
    sql="SELECT * FROM `sys`.`usersurvey`"
    mycursor.execute(sql)
    results=mycursor.fetchall()

   

    return jsonify(results)



@app.route('/TotalSurveys', methods=['GET'])
@cross_origin(supports_credentials=True)
def calcNumberofSurvey():

    mycursor = mydatabase.cursor()
    tot="SELECT COUNT(*) FROM `sys`.`usersurvey`"
    mycursor.execute(tot)
    val=mycursor.fetchone()
    total_surveys = val
    
   

    return jsonify({"TotalSurvey": total_surveys})



@app.route('/AverageAge', methods=['GET'])
@cross_origin(supports_credentials=True)
def calcAverageAge():

    mycursor = mydatabase.cursor()
    sql= ("SELECT ROUND(AVG(age)) FROM `sys`.`usersurvey` ")
    mycursor.execute(sql)
    que=mycursor.fetchone()
    average_age=(que)
    
  
  

    
    return jsonify ({'AverageAge': average_age})




@app.route('/oldestperson', methods=['GET'])
@cross_origin(supports_credentials=True)
def calcOldestPerson():

    mycursor = mydatabase.cursor()
    sql = ("SELECT MAX(age) FROM `sys`.`usersurvey`")
    mycursor.execute(sql)
    result = mycursor.fetchone()
    oldestperson=result
   
   

    return jsonify({'OldestPerson': oldestperson})



@app.route('/youngestperson', methods=['GET'])
@cross_origin(supports_credentials=True)
def calcYoungestPerson():

    mycursor = mydatabase.cursor()
    que = "SELECT MIN(age) FROM `sys`.`usersurvey`"
    mycursor.execute(que)
    data = mycursor.fetchone()
    youngestperson=data
    

    return jsonify({'YoungestPerson ': youngestperson})



@app.route('/pizza', methods=['GET'])
@cross_origin(supports_credentials=True)
def PizzaPerc():

    mycursor= mydatabase.cursor()
    que= "SELECT ROUND((COUNT(*) / (SELECT COUNT(*) FROM `sys`.`usersurvey`)) * 100, 1) FROM `sys`.`usersurvey`  WHERE pizza='1' "
    mycursor.execute(que)
    val = mycursor.fetchone()
    Pizza=val
    
    

    return jsonify({'Pizza':Pizza})



@app.route('/pasta', methods=['GET'])
@cross_origin(supports_credentials=True)
def PastaPerc():

    mycursor = mydatabase.cursor()
    que= "SELECT ROUND((COUNT(*) / (SELECT COUNT(*) FROM `sys`.`usersurvey`)) * 100, 1) FROM `sys`.`usersurvey`  WHERE pasta='1' "
    mycursor.execute(que)
    val = mycursor.fetchone()
    pasta=val
   
   

    return jsonify({'Pasta':pasta})



@app.route('/papwors', methods=['GET'])
@cross_origin(supports_credentials=True)
def PapworsPerc():

    mycursor=mydatabase.cursor()
    que= "SELECT ROUND((COUNT(*) / (SELECT COUNT(*) FROM `sys`.`usersurvey`)) * 100, 1) FROM `sys`.`usersurvey`  WHERE papwors='1' "
    mycursor.execute(que)
    val = mycursor.fetchone()
    Papwors=val
    
    

    return jsonify({'PapWors':Papwors})



@app.route('/eatout', methods=['GET'])
@cross_origin(supports_credentials=True)
def EatOutRatings():

    mycursor=mydatabase.cursor()
    sql= ("SELECT ROUND(AVG(eatOut)) FROM `sys`.`usersurvey` ")
    mycursor.execute(sql)
    val=mycursor.fetchone()
    EatOut=val
    
    

    return jsonify({'EatOut':EatOut})




@app.route('/watchMovies', methods=['GET'])

@cross_origin(supports_credentials=True)
def MovieRating():
    mycursor=mydatabase.cursor()
    sql= ("SELECT ROUND(AVG(watchMovie)) FROM `sys`.`usersurvey` ")
    mycursor.execute(sql)
    val=mycursor.fetchone()
    movies=val
  
    

    return jsonify({'watchMovies':movies})



@app.route('/watchTv', methods=['GET'])
@cross_origin(supports_credentials=True)
def tvRating():
    mycursor=mydatabase.cursor()
    sql= ("SELECT ROUND(AVG(tv)) FROM `sys`.`usersurvey` ")
    mycursor.execute(sql)
    val=mycursor.fetchone()
    tv=val
    
   

    return jsonify({'watchtv':tv})



@app.route('/listenRadio', methods=['GET'])
@cross_origin(supports_credentials=True)
def RadioRating():

    mycursor=mydatabase.cursor()
    sql= ("SELECT ROUND(AVG(listenRadio)) FROM `sys`.`usersurvey` ")
    mycursor.execute(sql)
    val=mycursor.fetchone()
    radio=val
    
   

    return jsonify({'radio':radio})




if __name__ == '__main__':
    app.run(debug=True)
