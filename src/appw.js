import { useEffect, useState } from 'react';
import './App.css';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import { GoDeviceDesktop } from 'react-icons/go'

function App() {
  const [theme, setTheme] = useState( localStorage.getItem("theme") ? localStorage.getItem("theme")  : "system");
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

  const modeOps = [
    {
      icon: <BsFillSunFill />,
      text: 'light'
    },
    {
      icon: <BsMoonFill />,
      text: 'moon'
    },
    {
      icon: <GoDeviceDesktop />,
      text: 'system'
    }
  ]



  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  onWindowMatch()







  useEffect(() => {
    switch (theme) {

      case 'light':
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", theme) 
        break;

      case 'moon':
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", theme)
        break;

      default:
        localStorage.removeItem("theme")
        onWindowMatch()
        break;

    }

  }, [theme])


  darkQuery.addEventListener('change', (e) => {
    if(!("theme" in localStorage)){
      if(e.matches) {
        document.documentElement.classList.add('dark')
      }
      else {
        document.documentElement.classList.remove('dark')

      }
    }
  })


  return (
    <>
      <section className='min-h-screen pt-8 dark:text-gray-200 dark:bg-slate-900'>
        <div className='fixed top-5 right-10 duration-75 bg-slate-200 dark:bg-slate-700 dark:text-gray-200'>

          {
            modeOps?.map(op => {
              return <button onClick={() => setTheme(op.text)} key={op.text} className={`  text-xl rounded-lg m-1 ${theme === op.text && 'text-sky-700'}   p-2`} >
                {op.icon}
              </button>
            })
          }

        </div>
        <div className='max-w-3xl  mx-auto px-5'>
          <div className='text-center'>
            <h2 className='text-5xl mb-2 mt-8'>Code A Program</h2>
            <h5 className='text-3xl leading-loose mb-6'>Share And Subscribe</h5>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sunt laborum. A minima repellendus consequuntur, consequatur officiis aliquam totam enim natus rerum quo, optio architecto voluptas eum voluptatum facilis in praesentium officia deserunt debitis!</p>
          <br />

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sunt laborum. A minima repellendus consequuntur, consequatur officiis aliquam totam enim natus rerum quo, optio architecto voluptas eum voluptatum facilis in praesentium officia deserunt debitis!</p>
          <br />

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sunt laborum. A minima repellendus consequuntur, consequatur officiis aliquam totam enim natus rerum quo, optio architecto voluptas eum voluptatum facilis in praesentium officia deserunt debitis!</p>
          <br />

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sunt laborum. A minima repellendus consequuntur, consequatur officiis aliquam totam enim natus rerum quo, optio architecto voluptas eum voluptatum facilis in praesentium officia deserunt debitis!</p>
          <br />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius corrupti aspernatur libero! Sed, voluptatum alias! Inventore quia cumque ea quam tenetur velit, in animi ullam aspernatur deleniti totam, minima error perspiciatis! Quod commodi non dignissimos facilis minima harum aspernatur cumque aut quasi recusandae quis deleniti doloremque velit facere eius, rerum dolore nihil voluptate minus vitae ea eligendi quidem alias. Exercitationem, aliquam soluta? Esse eveniet explicabo consectetur ut saepe. Eum fugiat molestiae voluptatem dolore doloremque ipsa ullam sint quaerat amet? Mollitia quia ea facere facilis magnam commodi temporibus sapiente aut, fugiat consectetur, consequuntur in et ipsum accusamus. Laborum eius tenetur nam.</p>
        </div>
      </section>
    </>
  );
}

export default App;
