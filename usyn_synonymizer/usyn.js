(function ($) {
	
    m_syn = new Array();
    m_sel = new Array();

    function setmas(t)
    {
        m_syn.length = 0;
        m_sel.length = 0;

        var m1 = new Array();
        var m2 = new Array();
	
        m1 = t.split("|||");
	
        m2 = m1[1].split("|");
        if (m2[ m2.length-3 ] != undefined) 
            window.document.getElementById("edit-change").innerHTML = m2[ m2.length-3 ];
        else
            window.document.getElementById("edit-change").innerHTML = "0";
	
	
        for (i=1; i<=m2[ m2.length-3 ]; i++)
        {
            m_syn[i] = new Array();
            m_sel[i] = new Array();
	
            m_syn[i].length = 0;
            m_sel[i].length = 0;		
        }
	
        var j = -1;
        var k = 0;
		
        for (var i=0; i<m1[0]; i++)
        {
            j = j+1;
            k = j;
            j = j+1;
            m_syn[ m2[k] ][m_syn[ m2[k] ].length] = m2[j];
			
            j = j+1;
            m_sel[ m2[k] ][m_sel[ m2[k] ].length] = m2[j];
        }
		
        return m1[2];
    }

    function trclick(z_n, syn_n)
    { 			 
        for (var i=0; i<m_sel[z_n].length; i++)
        {
            m_sel[z_n][i] = 0;
        }
		
        m_sel[z_n][syn_n] = 1;
				
        document.getElementById(z_n).innerHTML        = m_syn[z_n][syn_n];
        document.getElementById(z_n).style.background = "#DDFFDD";
		
        syn_list_close();
    }

    function checklength()
    {
        var len = document.getElementById('edit-input-text').value.length; 
        document.getElementById('edit-char-count').innerHTML = len;
		
        if (len>10000)
        {
            document.getElementById('edit-char-count').style.color = "#AA0000";
        }
        else
        {
            document.getElementById('edit-char-count').style.color = "#000000";	
        }
    }
    setInterval(checklength, 500)
	
    function delrows(tableId)
    {
        var tab = document.getElementById(tableId);
        var tb = tab.getElementsByTagName('TBODY')[0];
	
        var count = document.getElementById('select_syn').rows.length;
        for(var i=0; i<count; i++)
        {
            document.getElementById('select_syn').deleteRow(0);
        }
    }
	
    function add_syn(text, id, syn)
    {
        var newrow = document.getElementById('select_syn').insertRow(-1);
        var cell = newrow.insertCell(-1);
        cell.innerHTML = text;
        cell.id = id;
        cell.height = 25;
        cell.onclick = function() { trclick(syn, id); }
        cell.onmousemove = function() { cell.style.background = "#FFDDDD"; }
        cell.onmouseout = function() { if ( (m_sel[syn][id]==1) ) cell.style.background = "#DDFFDD"; else   cell.style.background = "#F3F8F3"; }
        cell.align = "center";
        cell.valign = "middle";
    }

    Drupal.behaviors.usyn_synonymizer =  {
        attach: function(context, settings) {
		
            $('#edit-submit-two').bind('click', function(){	
            $('#edit-input-text').empty();	
            document.getElementById('edit-input-text').innerHTML = $('#out').text();
            });
	
            syn_list_close();
	
            var data = document.getElementById('edit-synonym').value;
            document.getElementById('out').innerHTML = setmas(data);
	
            $('.zam').bind('click', function(){	
            var x=0, y=0;
	
            var syn = $(this).attr("id");
            var obj = document.getElementById(syn);
            var obj2 = document.getElementById('select_syn');
            x = $(this).position().left;
            y = $(this).position().top;
            t_h = $('#table1').height();
		
            delrows("select_syn");
            syn_list_close();
			
            if ( (document.getElementById(syn).style.background == "#ffdddd") | 
                (document.getElementById(syn).style.background == "rgb(255, 221, 221) none repeat scroll 0% 0%") |
                (document.getElementById(syn).style.background == "rgb(255, 221, 221)") )
            {
                document.getElementById(syn).style.background = "#DDFFDD";
                return 0;
            }
		
            for (i=1; i<m_syn.length; i++)
                document.getElementById(i).style.background = "#DDFFDD";
                document.getElementById(syn).style.background = "#FFDDDD";
		
            obj2.style.display = "block";
            $('#select_syn').css({'left': x+1, 'top': y-t_h});
			
            add_syn("<b>"+m_syn[syn][0]+"</b>", 0, syn);
            if (m_sel[syn][0]==1) 
                obj2.rows[0].style.background = "#DDFFDD";
            else
                obj2.rows[0].style.background = "#F3F8F3";
				
            for (i=1; i<m_syn[syn].length; i++)
            {
                add_syn(m_syn[syn][i], i, syn);
                if (m_sel[syn][i]==1) 
                    obj2.rows[i].style.background = "#DDFFDD";
                else
                    obj2.rows[i].style.background = "#F3F8F3";
            }
            });
        }
    };
	
    function syn_list_close()
    {
        document.getElementById('select_syn').style.display = "none";
    }
	
}(jQuery));