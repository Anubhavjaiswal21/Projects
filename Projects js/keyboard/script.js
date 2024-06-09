const insert=document.getElementById('insert');

window.addEventListener('keypress',function(e)
{
    insert.innerHTML=`
    <div class="color">
        <table>
            <tr>
                <th>Key</th>
                <th>key code</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key===" "?"Space":e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `

})