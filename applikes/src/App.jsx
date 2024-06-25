import {Post} from "./Post"

export function App() {
  return (
    <div>
      <Post 
        author="Machado de Assis" 
        coment="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Accusamus dolorum pariatur fuga rem voluptate, hic voluptatem corporis 
        distinctio aspernatur aperiam accusantium est totam aliquam similique illo 
        asperiores molestiae, iure nam!"/>
      
      <Post 
        author="Castro Alves" 
        coment="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Accusamus dolorum pariatur fuga rem voluptate, hic voluptatem corporis 
        distinctio aspernatur aperiam accusantium est totam aliquam similique illo 
        asperiores molestiae, iure nam!"/>

      <Post 
        author="Padre Antonio Vieira" 
        coment="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Accusamus dolorum pariatur fuga rem voluptate, hic voluptatem corporis 
        distinctio aspernatur aperiam accusantium est totam aliquam similique illo 
        asperiores molestiae, iure nam!"/>
      
    </div>
  )
}

