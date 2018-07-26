<template>
    <div class="menu">
        <!-- BEGIN LEFT BODY-->
        <div class="left_body">
            <!-- BEGIN LOGIN_INFO -->
            <div class="login_info">
                <div class="pull-top image">
                    <img src="./imgs/user.jpg" class="img-circle" alt="头像">
                </div>
                <div class="pull-bottom info">
                    <p class="username" id="view_name"></p>
                    <p class="role" id="editPsd">
                        <a>修改密码</a>
                    </p>
                </div>
            </div>
            <!-- END LOGIN_INFO -->
            <!-- BEGIN NAVBAR -->
            <div class="myNavbar">
                <router-link to="/air_cdt">精密空调</router-link>
                <router-link to="/data_input">数据记录</router-link>
                <!-- BEGIN SIDEBAR MENU -->
                <!--<ul id="navbarTab">-->
                <!--&lt;!&ndash;<li id="homelink"><span class="glyphicon glyphicon-home"></span> <span>首页大屏</span></li>&ndash;&gt;-->
                <!--<li id="eleclink"><span class="glyphicon glyphicon-flash"></span> <span>电力设施</span><span-->
                <!--class="badge"></span></li>-->
                <!--<li id="airlink"><span class="glyphicon glyphicon-scale"></span> <span>精密空调</span><span-->
                <!--class="badge"></span></li>-->
                <!--<li id="UPSlink"><span class="glyphicon glyphicon-hdd"></span> <span>UPS设备</span><span-->
                <!--class="badge"></span></li>-->
                <!--<li id="securelink"><span class="glyphicon glyphicon-cd"></span> <span>安防设施</span><span-->
                <!--class="badge"></span></li>-->
                <!--<li id="firelink"><span class="glyphicon glyphicon-fire"></span> <span>消防设备</span><span-->
                <!--class="badge"></span></li>-->
                <!--<li id="envlink"><span class="glyphicon glyphicon-tint"></span> <span>环境监控</span></li>-->
                <!--<li id="threeDlink"><span class="glyphicon glyphicon-inbox"></span> <span>机房3D</span></li>-->
                <!--<li id="alarmlink"><span class="glyphicon glyphicon-bell"></span> <span>报警分析</span></li>-->
                <!--<li id="datalink"><span class="glyphicon glyphicon-list-alt"></span> <span>数据记录</span></li>-->
                <!--</ul>-->

                <button type="button" id="manageMenu" class="btn btn-primary" data-toggle="tooltip" title="需要管理员权限">管
                    理
                </button>
                <!-- END SIDEBAR MENU -->
            </div>
            <!-- END NAVBAR -->
        </div>
        <!-- END LEFT BODY-->
        <!-- BEGIN RIGHT BODY-->
        <div class="right_body">
            <div class="right_top_info">
                <div class="info_head">
                    <span id="toggle_menu" class="item_head glyphicon glyphicon-menu-left"></span>
                    <!--<a class="item_head" href="/IDCIM/html/home/home.html"><span class="glyphicon glyphicon-open"></span>返回大屏</a>-->
                    <!--<div class="message item_head btn-group">-->
                    <!--<span class="glyphicon glyphicon-envelope dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
                    <!--<sup><span class="badge">2</span></sup>-->
                    <!--</span>-->
                    <!--<ul class="dropdown-menu list-group">-->
                    <!--<li class="list-group-item">-->
                    <!--<h4 class="list-group-item-heading">2018-01-01 01:01:01</h4>-->
                    <!--<p class="list-group-item-text">IDCIM主界面</p>-->
                    <!--</li>-->
                    <!--</ul>-->
                    <!--</div>-->
                </div>
                <div class="info_tail">
                    <span class="item_tail glyphicon glyphicon-question-sign"></span>
                    <!--<span class="item_tail glyphicon glyphicon-cog"><span>设置</span></span>-->
                    <span id="logout" class="item_tail glyphicon glyphicon-log-out"><span>退出</span></span>
                    <!--<div class="item_tail" id="logout">-->
                    <!--<span class="glyphicon glyphicon-log-out"></span>退出-->
                    <!--</div>-->
                </div>
            </div>
            <!-- BEGIN RIGHT TOP NAV -->
            <div class="right_top_nav">
                <div class="nav_style">
                    <span class="glyphicon glyphicon-step-backward"></span>
                </div>
                <div id="nav_tags" class="nav_tags"></div>
                <div class="nav_style">
                    <span class="glyphicon glyphicon-step-forward"></span>
                </div>
            </div>
            <!-- END RIGHT TOP NAV -->
            <!-- BEGIN CONTAINER -->
            <div class="container">
                <router-view id="container_body" class="container_body"></router-view>
            </div>
            <!-- END CONTAINER -->
            <!-- BEGIN FOOTER -->
            <footer class="text-center"> ©2017-2018 北京欧瑞德科技有限公司 版权所有 京公网安备11010802011695号 京ICP备13029607号</footer>
            <!-- END FOOTER -->
        </div>
        <!-- END RIGHT BODY-->
    </div>
</template>

<script>
    export default {
        name: "App",
        // created() {
        //     $('.login_info img').attr('src', '/user.jpg');
        // }
    }
</script>

<style scoped>
    div {
        margin: 0;
        padding: 0;
    }

    .menu {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .left_body {
        height: 100%;
        width: 10%;
        background-image: url("./imgs/bg_left_nav.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .login_info {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 20%;
        align-items: center;
        margin-top: 30px;
    }

    .image {
        height: 50%;
    }

    .image > img {
        width: 80px;
        height: 80px;
    }

    .info {
        display: flex;
        flex-direction: column;
        height: 50%;
        align-items: center;
    }

    .role > a:HOVER {
        color: #ffffff;
        cursor: pointer;
    }

    .myNavbar {
        width: 100%;
        height: 80%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .myNavbar > a {
        padding: 10px 0;
    }

    #navbarTab {
        width: 100%;
        height: 100%;
        padding: 0;
        list-style-type: none;
        position: relative;
    }

    #navbarTab > li {
        width: 100%;
        padding-left: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 16px;
        color: #b4bec9;
        cursor: pointer;
    }

    .myNavbar .btn { /*【运维/管理】切换*/
        position: absolute;
        bottom: 80px;
        width: 60%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    #navbarTab > li.active {
        color: #fff;
        background: linear-gradient(to right, #3c69c1 0%, #3c69c1 3%, #212d42 4%, #212d42 100%);
    }

    #navbarTab > li:HOVER {
        background-color: #5E6972;
    }

    #navbarTab > li > span {
        padding-left: 10px;
    }

    #navbarTab .badge {
        padding: 3px 7px;
        margin-left: 5px;
    }

    .right_body {
        height: 100%;
        width: 90%;
        display: flex;
        flex-direction: column;
    }

    .right_top_info {
        height: 40px;
        min-height: 40px;
        max-height: 40px;
        width: 100%;
        border-bottom: solid 2px rgb(45, 60, 80);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #f3f3f4;
        color: #869fb1;
    }

    #toggle_menu {
        color: #fff;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }

    .right_top_info .glyphicon:HOVER {
        color: #337ab7;
    }

    .info_head > .item_head { /*左侧的若干元素*/
        margin-left: 15px;
        cursor: pointer;
    }

    .info_head > .glyphicon { /*左侧边栏toggle*/
        /*margin-right: 20px;*/
        margin-left: 0px;
        position: absolute;
        top: 45%;
        height: 60px;
        width: 20px;
        background-color: #3399FF;
        line-height: 60px;
        text-align: center;
    }

    .info_head a { /*返回大屏  按钮*/
        color: #869fb1;
    }

    .info_head a span {
        margin-right: 3px;
    }

    .info_head > .message > span {
        display: flex;
    }

    .info_head sup {
        top: -1em;
    }

    .info_tail {
        text-align: right;
        margin-right: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .info_tail .item_tail {
        cursor: pointer;
        margin-left: 15px;
    }

    .info_tail > span:FIRST-CHILD {
        /*padding-right: 10px;*/
    }

    .info_tail > .btn-group {
        padding-top: 6px;
    }

    .info_tail sup {
        top: -1em;
    }

    #myButton sup {
        top: -1em;
        left: -.5em;
    }

    #myButton .badge {
        background-color: red;
    }

    .dropdown-menu {
        min-width: 360px;
    }

    .dropdown-menu > li:HOVER {
        z-index: 2;
        color: #fff;
        background-color: #337ab7;
        border-color: #337ab7;
    }

    .message .badge {
        background-color: #23b7e5;
    }

    .glyphicon-cog > span, .glyphicon-log-out > span {
        padding-left: 3px;
    }

    .right_top_nav {
        display: none;
        height: 40px;
        min-height: 40px;
        max-height: 40px;
        width: 100%;
        /*display: flex;*/
        flex-direction: row;
        border-bottom: 2px solid rgb(45, 60, 80);
        background-color: #fcfeff;
    }

    .nav_style {
        padding: 8px 10px auto;
    }

    .glyphicon-step-backward,
    .glyphicon-step-forward {
        cursor: pointer;
    }

    /* 登出 */
    .nav_style:last-child {
        width: 70px;
    }

    .nav_tags {
        height: 100%;
        width: 92%;
        display: flex;
        flex-direction: row;
    }

    .myTag {
        height: 100%;
        width: fit-content;
        min-width: 90px;
        padding-top: 8px;
        padding-bottom: auto;
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;
    }

    .myTag:HOVER {
        background-color: #F7F779;
    }

    .myTag > a {
        height: 100%;
        width: fit-content;
        margin: 0;
        padding: 0;
        cursor: pointer;
        text-decoration: none;
    }

    .myTag > a:hover {
        color: red;
    }

    .myTag > a:visited {
        color: #999999;
    }

    .myTag > span {
        cursor: pointer;
    }

    .currentTag,
    .currentTag:HOVER {
        background-color: #354462;
    }

    .currentTag > a {
        color: #ffffff;
    }

    #logout {
        cursor: pointer;
    }

    .container {
        width: 100%;
        margin: 0;
        padding: 0;
        flex: 1;
    }

    .container_body,
    .container_body > .tab-content {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .container_body > .tab-content {
        display: none;
    }

    footer {
        height: 30px;
        width: 90%;
    }

    .right_top_info,
    .right_top_nav,
    .container,
    .text-center {
        box-sizing: border-box;
    }
</style>