
// class RootFigure{
//     #name;
//     constructor(width, height, bg_c = "black",color = "pink"  ){
//         this.width = width
//         this.height = height
//         this.bg_c =  bg_c
//         this.color = color
//         this.#name = "none"
//         this.figure_style = `width:${this.width}px; height:${this.height}px; background-color:${this.bg_c}; color:${this.color}; display:flex; justify-content:center; align-items:center;`; 
//     }
//     create(){
         
//         document.write(`<div style = "${this.figure_style}">${this.#name}</div>`)
//     }
//     // set(value){
//     //     if (this.#name.trim().length <0) ? value
//     // }

// }
// class Rectangle extends RootFigure{
//     constructor(width, height, bg_c, color){
//         super(width, height, bg_c, color)
//     }
// }
// class Ellipse extends RootFigure{
//     constructor(width, height, bg_c, color){
//         super(width, height, bg_c, color = "black")
//         this.figure_style += `border-radius:50%;`
//     }
// }
// class Circle extends Ellipse{
//     constructor(width, height, bg_c, color){
//         super(width, height, bg_c, color = "black")
//         this.figure_style += `border-radius:50%;`
//     }
// }
// class Triangle extends RootFigure{
//     constructor(width, height, bg_c = "black"){
//         super(0,0,"red")
        
//     }
//     create(){
//         document.write(``)
//     }
// }
// let rg_1 = new Rectangle (200,100,"purple")

// rg_1.create()

// let el = new Ellipse(300,200, 'Yellow')
// el.create()
// let circ = new Circle(200,200,"black", "white")
// circ.create()


//task 1
// class PrintMachine{
//     constructor(size, color, family_font){
//         this.size = size;
//         this.color = color;
//         this.family_font = family_font;
//         this.font_style = `font-size: ${this.size}px; color: ${this.color}; font-family: ${this.family_font};`
//     }
//     print(text){
//         document.write(`<p style = "${this.font_style}">${text}</p>`)
//     }
// }
// let pr = new PrintMachine(12, "red", "serif")
// pr.print("LOREM IPSUM IPSUM LOREM")

//task 2
class News{
    constructor(header, day, month, year, text, ...tegs){
        this.header = header;
        
        this.publication_date= new Date(year,month-1,day)
        
        this.text = text;
        this.tegs =[...tegs]
        
    }
    print(){
        document.write(`<h2>${this.header}</h2>`)
        let count = (Date.now() - this.publication_date) / 86400000;
        count = Math.ceil(count)
        if(count == 1){
            document.write(`<h6>Today</h6>`)
        }
        else if (count >1  && count <=7){
            document.write(`<h6>${count} days ago</h6>`)
        }
        else{
            document.write(`<h6>${this.publication_date.toDateString()}</h6>`)
        }
        document.write(`<p>${this.text}</p>`)
        document.write(`<p>#${this.tegs.join('#')}</p>`)
       
    }

}
let news = new News("Header", 27,10,2000, " Lorem ipsum, ipsum lorem Lorem ipsum, ipsum loremLorem ipsum, ipsum lorem Lorem ipsum, ipsum lorem Lorem ipsum, ipsum lorem", "sport","PROGRAMA")
news.print()

class Blog{
    #news = []
    constructor(){
        
    }
    AddNews(header, day, month, year, text, ...tegs){
        this.#news.push(new News(header, day, month, year, text, ...tegs))
    }
    get(){
        console.log(`News count: ${this.#news.length()}`)
    }
    ShowAllNews(){
        this.#news.forEach(element => {
            element.print()
        });
    }
    RemoveNews(header){
        let index = this.#news.findIndex((headers) => {
            return headers.header == header
        })
        console.log(index)
        this.#news.splice(index,1)
    }
    sort(){
        this.#news.sort((a, b)=> 
        {
            
            if(a.publication_date < b.publication_date) return 1;
            else{
                return -1;
            }
        })
        
    }
    findByTeg(tag){
        return this.#news.filter(news => {
            console.log(news.tegs)
            if(news.tegs.indexOf(tag) !=-1) return true;
        });
    }
    
}
let blog = new Blog()
blog.AddNews("Header", 27,10,2000, " Lorem ipsum, ipsum lorem Lorem ipsum, ipsum loremLorem ipsum, ipsum lorem Lorem ipsum, ipsum lorem Lorem ipsum, ipsum lorem", "sprot", "port", "coolio")
blog.AddNews("Header1", 27,5,2024, " Lorem ipsum, ipsum lorem Lorem ipsum, ipsum loremLorem ipsum, ipsum lorem Lorem ipsum, ipsum lorem Lorem ipsum, ipsum lorem","tkinter", "killian", "coolio")
blog.AddNews("Header2", 25,5,2024, " Lorem ipsum, ipsum lorem Lorem ipsum, ipsum loremLorem ipsum, ipsum lorem Lorem ipsum, ipsum lorem Lorem ipsum, ipsum lorem","borcyha", "bokser", "kick")
blog.ShowAllNews()
blog.sort()
blog.ShowAllNews()
// //blog.RemoveNews("Header2")
// blog.ShowAllNews()
document.write("<hr>")
// let res = blog.findByTeg("coolio");
// console.log(res)
// res.forEach(element => {
//     element.print();
// })