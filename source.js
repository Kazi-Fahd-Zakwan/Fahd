var quote = [["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"], ["“A room without books is like a body without a soul.”"], ["“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”"], ["“If you tell the truth, you don't have to remember anything.”"], ["“We are all in the gutter, but some of us are looking at the stars.”"], ["“Life is what happens to us while we are making other plans.”"], ["“The man who does not read has no advantage over the man who cannot read.”"]];
function quote_box(head1){
    let choice = Math.floor(Math.random() * (quote.length));
    message = quote[choice]
    document.getElementById(head1).innerHTML = message;
};

function func01(head1, id1){
    document.getElementById(head1).style.color = "yellow";    
    document.getElementById(head1).style.fontFamily = "monospace";
    document.getElementById(id1).style.backgroundColor = "green";
    document.getElementById(id1).style.borderColor = "blue";

};
function func02(head1, id1){
    document.getElementById(head1).style.color = "red";    
    document.getElementById(head1).style.fontFamily = "'Courier New', Courier";
    document.getElementById(id1).style.backgroundColor = "yellow";
    document.getElementById(id1).style.borderColor = "black";

};
function func03(head1, id1){
    document.getElementById(head1).style.color = "white";    
    document.getElementById(head1).style.fontFamily = "Lucida Sans Unicode";    
    document.getElementById(id1).style.backgroundColor = "black";
    document.getElementById(id1).style.borderColor = "gray";

};
function func04(head1, id1){
    document.getElementById(head1).style.color = "black";    
    document.getElementById(head1).style.fontFamily = "sans-serif";              
    document.getElementById(id1).style.backgroundColor = "pink";
    document.getElementById(id1).style.borderColor = "red";

};