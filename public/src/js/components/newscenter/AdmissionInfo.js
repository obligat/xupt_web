import React, {Component} from "react";
import "../../../css/newscenter/NewsCenter.css";
import ReactMarkdown from "react-markdown";

export default class AdmissionInfo extends Component {

    render() {
        var article =
`# 第一章
总则
## 第一条
为了保证学校本科招生工作顺利进行，切实维护学校和考生的合法权益，根据《中华人民共和国教育法》、《中华人民共和国高等教育法》及教育部关于普通高等学校招生工作相关规定，并结合学校实际情况，制定本章程。
## 第二条
西安邮电大学是一所以工为主，以信息科学技术为特色，工、管、理、经、文、法、艺多学科协调发展的普通高等学校。
## 第三条
学校全称：西安邮电大学
学校代码：11664（部标）。
## 第四条
学校地址：西安市雁塔区长安南路563号（雁塔校区）；西安市长安区西长安街（长安校区）。
## 第五条
办学类型：公办普通高等学校
办学层次：本科。
## 第六条
颁发学历证书的学校名称：西安邮电大学。本科学历颁发普通高校本科毕业证书。
## 第七条
学校招生工作在学校纪律检查委员会和监察处的监督下进行。
# 第一章
总则
## 第一条
为了保证学校本科招生工作顺利进行，切实维护学校和考生的合法权益，根据《中华人民共和国教育法》、《中华人民共和国高等教育法》及教育部关于普通高等学校招生工作相关规定，并结合学校实际情况，制定本章程。
## 第二条
西安邮电大学是一所以工为主，以信息科学技术为特色，工、管、理、经、文、法、艺多学科协调发展的普通高等学校。
## 第三条
学校全称：西安邮电大学
学校代码：11664（部
# 第二章
招生计划
## 第八条
学校本科招生分省分专业招生计划按教育部下达, 由各省级招生考试机构发布为准公布。预留计划安排在生源人数多，质量好的省（市、区），用于调节各地上线生源的不平衡。预留计划由学校招生工作领导小组集体研究使用。
统一组织下进行，执行教育部规定的“学校负责、招办监督”的录取体制。依据教育部最新颁布的《普通高等学校招生工作规定》，遵循“公平竞争、公正选拔、公开透明，德智体美全面考核、综合评价、择优录取”的录取原则。
`;
        return (
            <div className="newsWrap">
                <div>
                    <div className="admissionArticle">
                        <ReactMarkdown source={article}/>
                    </div>
                </div>
            </div>
        );
    }
}
