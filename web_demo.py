#coding=utf-8
import json
from flask import Flask, request, render_template

app = Flask(__name__, template_folder='./')

error_info = {'retcode':'提交失败', 'msg':'error'}
success_info = {'retcode':'提交成功', 'data':{}}

@app.route('/')
def main():
    return render_template('./gallery.html')

if __name__ == '__main__':
    host = '0.0.0.0'
    port = '8080'
    app.run(host=host, port=port)

