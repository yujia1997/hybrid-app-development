"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var Course = /** @class */ (function () {
    function Course(id, courseName, images, task, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
exports.Course = Course;
var courses = [
    new Course(1, '2017级Web开发（二）', "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(2, '2016级混合应用开发', "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 23, 100),
    new Course(3, '2016级测试方向', "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130", 15, 97),
    new Course(4, '计算机导论', "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130", 30, 99),
    new Course(5,'2016级HTML5与CSS3',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",5,91),
    new Course(6,'2017级3、4班软件测试基础',"http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    3,102), 
    new Course(7,'2018级信息素养实践',"http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",
    3,102),
    new Course(8,'2018级计算机导论',"http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    3,102),
    new Course(9,'2017级数据结构',"http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    3,102),
    new Course(10,'软件学院18级新生训练营',"http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130",
    3,102),
    new Course(11,'2017级coding暑期训练营',"http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",
    3,102),
];
// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses', function (req, res) {
    res.json(courses);
});
app.get('/api/courses/:id', function (req, res) {
    res.json(courses.find(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    console.log(req.body);
    res.json(courses);
});
app.listen(8000);
