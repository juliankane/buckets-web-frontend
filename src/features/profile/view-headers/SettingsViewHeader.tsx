
import { NavLink } from 'react-router-dom';



export default function SettingsViewHeader() {
    
    const tabs = ["Account", "Preferences", "Appearence", "Notifications", "Privacy"]

    
  return (

      <div className="space-x-10">
        {tabs.map((tab, index) => (
          <NavLink
            to={tab.toLowerCase()}
            key={index}
            className={({ isActive }) =>
              `text-lg pb-2 border-b-2 ${
                isActive ? 'border-blue-500 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:underline'
              }`
            }
          >
            {tab}
          </NavLink>
        ))}
      </div>


    )
};