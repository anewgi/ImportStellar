import os
import json

import datetime as dt
import numpy as np
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify,
    request)
import sqlalchemy

from sqlalchemy import create_engine, inspect, func
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

import pymysql
pymysql.install_as_MySQLdb()

app = Flask(__name__)

engine = create_engine('mysql://xu9w58wlnz5u66ol:zve52y3n40e1fekf@k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/epzb7af0kkljy4i5', echo=True)

Base = automap_base()

Base.prepare(engine, reflect=True)

print(Base)

session = Session(engine)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/CO2")
def C02():
    return render_template("CO2.HTML")

@app.route("/test")
def test():
    return render_template("test.HTML")

@app.route("/heatmap")
def heatmap():
    return render_template("heatmap.HTML")
    
if __name__ == "__main__":
    app.run(debug=True)