const articles = [
    {
        name: 'learn-react',
        title: 'Start Reading',
        content: [
            `Welcome! Today we're going to be talking about the fastest way to
            learn React. We'll be discussing some topics such as proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },    {
        name: 'learn-node',
        title: 'Start Writing',
        content: [
           <form className="m-5" action="" >
            <input type="text"  className="p-20 text-black text-left" placeholder="Write your story"/><br></br>
            <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full p-2 m-3" type='submit'>Submit</button>

           </form>
        ]
    },     {
        name: 'mongodb',
        title: 'Become A Member',
        content: [ <form action="" className="m-10">
            Name:<br></br>
            <input type="text" /><br/><br/>
            Email:<br></br>
            <input  type="email"/><br/><br/>
            Password:<br></br>
            <input  type="password"/><br/>
            <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full p-2 m-3" type='submit'>Submit</button>
            
        </form>
           
        ]
    },  
];

export default articles;
