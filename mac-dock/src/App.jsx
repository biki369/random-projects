
import './App.css'
function App() {

  const dockItems = [
    {
      item: "https://cdn.jim-nielsen.com/macos/512/helm-for-app-store-connect-2024-06-27.png?rf=1024"
    },
    {
      item: "https://cdn.jim-nielsen.com/macos/512/looks-like-rain-2024-06-04.png?rf=1024"
    },
    {
      item: "https://cdn.jim-nielsen.com/macos/512/taska-for-github-gitlab-issues-2024-04-24.png?rf=1024"
    },
    {
      item: "https://cdn.jim-nielsen.com/macos/512/prompt-3-2024-02-12.png?rf=1024"
    },
    {
      item: "https://cdn.jim-nielsen.com/macos/512/angry-birds-reloaded-2023-09-27.png?rf=1024"
    },
    {
      item: "https://cdn.jim-nielsen.com/macos/512/logoist-5-2023-10-09.png?rf=1024"
    },
  ];



  return (
    <>
      <div className="container">
        <div className="dock-box">
          <div className="dock">
            {
              dockItems.map((item, i) => {
                return <div className="dock-item" key={i} 
                >
                  <img src={item.item} alt="" />
                </div>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
