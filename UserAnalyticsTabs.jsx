// export default function UserAnalyticsTabs({ activeTab, onTabChange }) {
//   const tabs = [
//     { key: "following", label: "Following" },
//     { key: "interested", label: "Interested Categories" },
//     { key: "nonInterested", label: "Non-Interested Categories" },
//     { key: "hidden", label: "Hidden Feeds" },
//     { key: "liked", label: "Liked Feeds" },
//     { key: "disliked", label: "Disliked Feeds" },
//     { key: "commented", label: "Commented Feeds" },
//     { key: "shared", label: "Shared Feeds" },
//     { key: "downloaded", label: "Downloaded Feeds" },
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow mb-6">
//       <div className="flex border-b border-gray-200 flex-wrap">
//         {tabs.map((tab) => (
//           <button
//             key={tab.key}
//             onClick={() => onTabChange(tab.key)}
//             className={`px-4 py-2 -mb-px font-medium text-sm border-b-2 transition-colors duration-300 ${
//               activeTab === tab.key ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500 hover:text-gray-700"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }








// import { motion } from "framer-motion";
// import { 
//   Users, 
//   Heart, 
//   MessageSquare, 
//   EyeOff,
//   ThumbsUp,
//   ThumbsDown,
//   Share2,
//   Download,
//   Tag,
//   XCircle
// } from "lucide-react";

// export default function UserAnalyticsTabs({ activeTab, onTabChange }) {
//   const tabs = [
//     { key: "following", label: "Following", icon: Users },
//     { key: "followers", label: "Followers", icon: Users },
//     { key: "interested", label: "Interested", icon: Tag },
//     { key: "nonInterested", label: "Not Interested", icon: XCircle },
//     { key: "hidden", label: "Hidden", icon: EyeOff },
//     { key: "liked", label: "Liked", icon: ThumbsUp },
//     { key: "disliked", label: "Disliked", icon: ThumbsDown },
//     { key: "commented", label: "Commented", icon: MessageSquare },
//     { key: "shared", label: "Shared", icon: Share2 },
//     { key: "downloaded", label: "Downloaded", icon: Download },
//   ];

//   return (
//     <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//       <div className="flex overflow-x-auto scrollbar-hide">
//         {tabs.map((tab) => {
//           const Icon = tab.icon;
//           const isActive = activeTab === tab.key;
          
//           return (
//             <button
//               key={tab.key}
//               onClick={() => onTabChange(tab.key)}
//               className={`flex items-center gap-2 px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
//                 isActive
//                   ? "border-blue-600 text-blue-600 bg-blue-50"
//                   : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
//               }`}
//             >
//               <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
//               {tab.label}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }






export default function UserAnalyticsTabs({ activeTab, onTabChange }) {
  const tabs = [
    { key: "following", label: "Following" },
    { key: "followers", label: "Followers" },
    { key: "interested", label: "Interested" },
    { key: "nonInterested", label: "Not Interested" },
    { key: "hidden", label: "Hidden" },
    { key: "liked", label: "Liked" },
    { key: "disliked", label: "Disliked" },
    { key: "commented", label: "Commented" },
    { key: "shared", label: "Shared" },
    { key: "downloaded", label: "Downloaded" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-5 lg:grid-cols-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`flex-1 px-2 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors text-center ${
                isActive
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}