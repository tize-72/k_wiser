function show() {
    var oButton = document.getElementById("1button "); //假设HTML中按钮id="button "，并取得。
    var oDiv = document.getElementById("testdiv "); //假设HTML中div的id="div "，并取得。
    var result = document.getElementById("searchresult ")
    var multipages = document.getElementById("multipages ")
    var original_graph = document.getElementById("original-graph ")
    var sub_graph = document.getElementById("sub-graph ")
        // window.location.href = "http://www.baidu.com/ ";
    oDiv.style.display = "block ";
    result.style.display = "block ";
    multipages.style.display = "block ";
    original_graph.style.display = "block ";
    sub_graph.style.display = "block ";

}

function hide() {
    var oButton = document.getElementById("1button "); //假设HTML中按钮id="button "，并取得。
    var oDiv = document.getElementById("testdiv "); //假设HTML中div的id="div "，并取得。
    var result = document.getElementById("searchresult ")
    var multipages = document.getElementById("multipages ")
        // window.location.href = "http://www.baidu.com/ ";
    oDiv.style.display = "none ";
    result.style.display = "none ";
    multipages.style.display = "none ";
}