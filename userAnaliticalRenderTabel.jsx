// import React, { useState } from "react";
// import VideoPopup from "../../../hooks/videoPopUp"; // import your VideoPopup component

// export default function UserAnalyticsTable({ activeTab, data, currentPage, itemsPerPage }) {
//   const [videoUrl, setVideoUrl] = useState(null);

//   if (!data.length)
//     return <p className="p-4 text-center">No data available</p>;

//   const renderTableHead = () => {
//     switch (activeTab) {
//       case "following":
//         return (
//           <tr>
//             <th className="px-4 py-2 border">#</th>
//             <th className="px-4 py-2 border">Following User</th>
//             <th className="px-4 py-2 border">Followed Date</th>
//           </tr>
//         );
//       case "interested":
//       case "nonInterested":
//         return (
//           <tr>
//             <th className="px-4 py-2 border">#</th>
//             <th className="px-4 py-2 border">Category Name</th>
//             <th className="px-4 py-2 border">Action Date</th>
//           </tr>
//         );
//       case "commented":
//         return (
//           <tr>
//             <th className="px-4 py-2 border">#</th>
//             <th className="px-4 py-2 border">Content</th>
//             <th className="px-4 py-2 border">Comment</th>
//             <th className="px-4 py-2 border">Action Date</th>
//           </tr>
//         );
//       case "liked":
//       case "disliked":
//       case "shared":
//       case "downloaded":
//       case "hidden":
//         return (
//           <tr>
//             <th className="px-4 py-2 border">#</th>
//             <th className="px-4 py-2 border">Content</th>
//             <th className="px-4 py-2 border">Action Date</th>
//           </tr>
//         );
//       default:
//         return (
//           <tr>
//             <th className="px-4 py-2 border">#</th>
//             <th className="px-4 py-2 border">Feed</th>
//             <th className="px-4 py-2 border">Date</th>
//           </tr>
//         );
//     }
//   };

//   const renderTableRows = () => {
//     return data.map((item, idx) => {
//       const index = (currentPage - 1) * itemsPerPage + idx + 1;

//       // Following Tab
//       if (activeTab === "following") {
//         return (
//           <tr key={item.userId || idx} className="border-b hover:bg-gray-100">
//             <td className="px-4 py-2 border">{index}</td>
//             <td className="px-4 py-2 border flex items-center gap-3">
//               <img
//                 src={item.profileAvatar || "/default-avatar.png"}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <span className="font-medium">{item.userName || "Unknown"}</span>
//             </td>
//             <td className="px-4 py-2 border">
//               {item.followedAt ? new Date(item.followedAt).toLocaleString() : "-"}
//             </td>
//           </tr>
//         );
//       }

//       // Interested / NonInterested Categories
//       if (activeTab === "interested" || activeTab === "nonInterested") {
//         return (
//           <tr key={item._id || idx} className="border-b hover:bg-gray-100">
//             <td className="px-4 py-2 border">{index}</td>
//             <td className="px-4 py-2 border">{item.name || "-"}</td>
//             <td className="px-4 py-2 border">
//               {item.updatedAt ? new Date(item.updatedAt).toLocaleString() : "-"}
//             </td>
//           </tr>
//         );
//       }

//       // Commented Tab
//       if (activeTab === "commented") {
//         return (
//           <tr key={item._id || idx} className="border-b hover:bg-gray-100">
//             <td className="px-4 py-2 border">{index}</td>
//             <td className="px-4 py-2 border">
//               {item.feed?.title || (item.feed?.contentUrl ? (
//                 <img
//                   src={item.feed.contentUrl}
//                   alt="feed content"
//                   className="w-20 h-20 object-cover rounded cursor-pointer"
//                   onClick={() => setVideoUrl(item.feed.contentUrl)}
//                 />
//               ) : "-")}
//             </td>
//             <td className="px-4 py-2 border">{item.commentText || "-"}</td>
//             <td className="px-4 py-2 border">
//               {item.createdAt ? new Date(item.createdAt).toLocaleString() : "-"}
//             </td>
//           </tr>
//         );
//       }

//       // Hidden / Liked / Disliked / Shared Tabs
//     if (["liked", "disliked", "shared", "hidden"].includes(activeTab)) {
//   const feed = item.feedId || {};
//   const contentUrl = feed.contentUrl || item.contentUrl;
//   const contentType = item.type || (feed.type || "image");
//   const actionDate =
//     item.likedAt ||
//     item.dislikedAt ||
//     item.sharedAt ||
//     item.downloadedAt ||
//     item.updatedAt;

//   return (
//     <tr key={item._id || idx} className="border-b hover:bg-gray-100">
//       <td className="px-4 py-2 border">{index}</td>
//       <td className="px-4 py-2 border">
//         {contentUrl ? (
//           contentType === "video" ? (
//             <div
//               className="relative w-20 h-20 rounded-md overflow-hidden cursor-pointer"
//               onClick={() => setVideoUrl(contentUrl)}
//             >
//               <video src={contentUrl} className="w-full h-full object-cover" muted />
//               <div className="absolute inset-0 bg-black/25 flex items-center justify-center text-white font-bold">
//                 ▶
//               </div>
//             </div>
//           ) : (
//             <img
//               src={contentUrl}
//               alt="content"
//               className="w-20 h-20 object-cover rounded-md"
//             />
//           )
//         ) : (
//           feed.title || "-"
//         )}
//       </td>
//       <td className="px-4 py-2 border">
//         {actionDate ? new Date(actionDate).toLocaleString() : "-"}
//       </td>
//     </tr>
//   );
// }


//       // Default Feeds Tab
//       return (
//         <tr key={item._id || idx} className="border-b hover:bg-gray-100">
//           <td className="px-4 py-2 border">{index}</td>
//           <td className="px-4 py-2 border">
//             {item.contentUrl ? (
//               <img
//                 src={item.contentUrl}
//                 alt="feed"
//                 className="w-20 h-20 object-cover rounded"
//               />
//             ) : item.title || "-"}
//           </td>
//           <td className="px-4 py-2 border">
//             {item.createdAt ? new Date(item.createdAt).toLocaleString() : "-"}
//           </td>
//         </tr>
//       );
//     });
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-[600px] md:min-w-full text-left border-collapse border">
//         <thead className="bg-gray-50">{renderTableHead()}</thead>
//         <tbody>{renderTableRows()}</tbody>
//       </table>

//       {/* Video Popup */}
//       {videoUrl && <VideoPopup videoUrl={videoUrl} onClose={() => setVideoUrl(null)} />}
//     </div>
//   );
// }










// import { useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   Play, 
//   Eye, 
//   MessageSquare,
//   Share2,
//   Download,
//   ThumbsUp,
//   ThumbsDown,
//   MoreVertical,
//   ExternalLink
// } from "lucide-react";
// import VideoPopup from "../../../hooks/videoPopUp";

// export default function UserAnalyticsTable({ activeTab, data, currentPage, itemsPerPage }) {
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [expandedComment, setExpandedComment] = useState(null);

//   if (!data.length) {
//     return (
//       <div className="text-center py-12">
//         <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Eye className="w-8 h-8 text-gray-400" />
//         </div>
//         <h3 className="text-lg font-medium text-gray-900 mb-2">No data available</h3>
//         <p className="text-gray-600">No {activeTab.replace(/([A-Z])/g, ' $1')} found for the selected filters.</p>
//       </div>
//     );
//   }

//   const getTabIcon = () => {
//     switch (activeTab) {
//       case "following":
//       case "followers":
//         return Users;
//       case "liked":
//         return ThumbsUp;
//       case "disliked":
//         return ThumbsDown;
//       case "commented":
//         return MessageSquare;
//       case "shared":
//         return Share2;
//       case "downloaded":
//         return Download;
//       default:
//         return Eye;
//     }
//   };

//   const renderTableRow = (item, index) => {
//     const globalIndex = (currentPage - 1) * itemsPerPage + index + 1;

//     // Following / Followers Tab
//     if (activeTab === "following" || activeTab === "followers") {
//       return (
//         <tr key={item.userId || index} className="border-b border-gray-100 hover:bg-gray-50">
//           <td className="px-6 py-4">
//             <div className="text-sm font-medium text-gray-900">#{globalIndex}</div>
//           </td>
//           <td className="px-6 py-4">
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <img
//                   src={item.profileAvatar || "/api/placeholder/40/40"}
//                   alt={item.userName || "User"}
//                   className="w-10 h-10 rounded-full object-cover border border-gray-200"
//                 />
//                 {item.isOnline && (
//                   <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
//                 )}
//               </div>
//               <div>
//                 <div className="font-medium text-gray-900">{item.userName || "Unknown User"}</div>
//                 <div className="text-sm text-gray-500">{item.email || "No email"}</div>
//               </div>
//             </div>
//           </td>
//           <td className="px-6 py-4">
//             <div className="text-sm text-gray-900">
//               {item.followedAt || item.createdAt 
//                 ? new Date(item.followedAt || item.createdAt).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'short',
//                     day: 'numeric'
//                   })
//                 : "-"}
//             </div>
//             <div className="text-xs text-gray-500">
//               {item.followedAt || item.createdAt 
//                 ? new Date(item.followedAt || item.createdAt).toLocaleTimeString('en-US', {
//                     hour: '2-digit',
//                     minute: '2-digit'
//                   })
//                 : ""}
//             </div>
//           </td>
//           <td className="px-6 py-4">
//             <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//               View Profile
//             </button>
//           </td>
//         </tr>
//       );
//     }

//     // Interested / Non-Interested Tab
//     if (activeTab === "interested" || activeTab === "nonInterested") {
//       return (
//         <tr key={item._id || index} className="border-b border-gray-100 hover:bg-gray-50">
//           <td className="px-6 py-4">
//             <div className="text-sm font-medium text-gray-900">#{globalIndex}</div>
//           </td>
//           <td className="px-6 py-4">
//             <div className="flex items-center gap-3">
//               <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
//                 activeTab === "interested" ? "bg-green-100" : "bg-red-100"
//               }`}>
//                 <span className={`font-medium ${
//                   activeTab === "interested" ? "text-green-600" : "text-red-600"
//                 }`}>
//                   {(item.name || item.category || "Category").charAt(0)}
//                 </span>
//               </div>
//               <div>
//                 <div className="font-medium text-gray-900">{item.name || item.category || "Unknown Category"}</div>
//                 <div className="text-sm text-gray-500">{item.count || 0} items</div>
//               </div>
//             </div>
//           </td>
//           <td className="px-6 py-4">
//             <div className="text-sm text-gray-900">
//               {item.updatedAt 
//                 ? new Date(item.updatedAt).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'short',
//                     day: 'numeric'
//                   })
//                 : "-"}
//             </div>
//           </td>
//         </tr>
//       );
//     }

//     // Commented Tab
//     if (activeTab === "commented") {
//       const commentText = item.commentText || item.comment || "";
//       const isLongComment = commentText.length > 100;
//       const displayText = isLongComment && expandedComment !== item._id 
//         ? `${commentText.substring(0, 100)}...`
//         : commentText;

//       return (
//         <tr key={item._id || index} className="border-b border-gray-100 hover:bg-gray-50">
//           <td className="px-6 py-4">
//             <div className="text-sm font-medium text-gray-900">#{globalIndex}</div>
//           </td>
//           <td className="px-6 py-4">
//             <div className="flex items-center gap-3">
//               {item.feed?.contentUrl ? (
//                 <div className="relative">
//                   {item.feed?.type === "video" ? (
//                     <div
//                       className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 cursor-pointer"
//                       onClick={() => setVideoUrl(item.feed.contentUrl)}
//                     >
//                       <div className="w-full h-full flex items-center justify-center">
//                         <Play className="w-6 h-6 text-white bg-black/50 rounded-full p-1" />
//                       </div>
//                     </div>
//                   ) : (
//                     <img
//                       src={item.feed.contentUrl}
//                       alt="Content"
//                       className="w-16 h-16 rounded-md object-cover"
//                     />
//                   )}
//                 </div>
//               ) : (
//                 <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center">
//                   <MessageSquare className="w-6 h-6 text-gray-400" />
//                 </div>
//               )}
//               <div className="flex-1">
//                 <div className="font-medium text-gray-900 line-clamp-1">
//                   {item.feed?.title || "Untitled Post"}
//                 </div>
//                 <div className="text-sm text-gray-500 mt-1">
//                   {displayText}
//                   {isLongComment && (
//                     <button
//                       onClick={() => setExpandedComment(
//                         expandedComment === item._id ? null : item._id
//                       )}
//                       className="ml-2 text-blue-600 hover:text-blue-700"
//                     >
//                       {expandedComment === item._id ? "Show less" : "Read more"}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </td>
//           <td className="px-6 py-4">
//             <div className="text-sm text-gray-900">
//               {item.createdAt 
//                 ? new Date(item.createdAt).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'short',
//                     day: 'numeric'
//                   })
//                 : "-"}
//             </div>
//             <div className="text-xs text-gray-500">
//               {item.createdAt 
//                 ? new Date(item.createdAt).toLocaleTimeString('en-US', {
//                     hour: '2-digit',
//                     minute: '2-digit'
//                   })
//                 : ""}
//             </div>
//           </td>
//         </tr>
//       );
//     }

//     // Other Tabs (Liked, Disliked, Shared, Downloaded, Hidden)
//     const feed = item.feedId || item.feed || {};
//     const contentUrl = feed.contentUrl || item.contentUrl;
//     const contentType = item.type || feed.type || "image";
//     const actionDate = item.likedAt || item.dislikedAt || item.sharedAt || 
//                       item.downloadedAt || item.updatedAt || item.createdAt;

//     return (
//       <tr key={item._id || index} className="border-b border-gray-100 hover:bg-gray-50">
//         <td className="px-6 py-4">
//           <div className="text-sm font-medium text-gray-900">#{globalIndex}</div>
//         </td>
//         <td className="px-6 py-4">
//           <div className="flex items-center gap-3">
//             {contentUrl ? (
//               <div className="relative">
//                 {contentType === "video" ? (
//                   <div
//                     className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 cursor-pointer"
//                     onClick={() => setVideoUrl(contentUrl)}
//                   >
//                     <div className="w-full h-full flex items-center justify-center">
//                       <Play className="w-6 h-6 text-white bg-black/50 rounded-full p-1" />
//                     </div>
//                   </div>
//                 ) : (
//                   <img
//                     src={contentUrl}
//                     alt="Content"
//                     className="w-16 h-16 rounded-md object-cover"
//                   />
//                 )}
//               </div>
//             ) : (
//               <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center">
//                 {activeTab === "liked" && <ThumbsUp className="w-6 h-6 text-gray-400" />}
//                 {activeTab === "disliked" && <ThumbsDown className="w-6 h-6 text-gray-400" />}
//                 {activeTab === "shared" && <Share2 className="w-6 h-6 text-gray-400" />}
//                 {activeTab === "downloaded" && <Download className="w-6 h-6 text-gray-400" />}
//                 {activeTab === "hidden" && <Eye className="w-6 h-6 text-gray-400" />}
//               </div>
//             )}
//             <div className="flex-1">
//               <div className="font-medium text-gray-900 line-clamp-1">
//                 {feed.title || item.title || "Untitled Content"}
//               </div>
//               <div className="text-sm text-gray-500 mt-1">
//                 {feed.description || item.description || "No description"}
//               </div>
//             </div>
//           </div>
//         </td>
//         <td className="px-6 py-4">
//           <div className="text-sm text-gray-900">
//             {actionDate 
//               ? new Date(actionDate).toLocaleDateString('en-US', {
//                   year: 'numeric',
//                   month: 'short',
//                   day: 'numeric'
//                 })
//               : "-"}
//           </div>
//           <div className="text-xs text-gray-500">
//             {actionDate 
//               ? new Date(actionDate).toLocaleTimeString('en-US', {
//                   hour: '2-digit',
//                   minute: '2-digit'
//                 })
//               : ""}
//           </div>
//         </td>
//         <td className="px-6 py-4">
//           <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//             View Details
//           </button>
//         </td>
//       </tr>
//     );
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               #
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               {activeTab === "following" || activeTab === "followers" ? "User" : "Content"}
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Date
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-100">
//           {data.map((item, index) => renderTableRow(item, index))}
//         </tbody>
//       </table>

//       {/* Video Popup */}
//       {videoUrl && (
//         <VideoPopup
//           videoUrl={videoUrl}
//           onClose={() => setVideoUrl(null)}
//         />
//       )}
//     </div>
//   );
// }








import { useState } from "react";
import { Play } from "lucide-react";
import VideoPopup from "../../../hooks/videoPopUp";

export default function UserAnalyticsTable({ activeTab, data, currentPage, itemsPerPage }) {
  const [videoUrl, setVideoUrl] = useState(null);
  const [expandedComment, setExpandedComment] = useState(null);

  if (!data.length) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No data available</h3>
        <p className="text-gray-600">No {activeTab.replace(/([A-Z])/g, ' $1')} found.</p>
      </div>
    );
  }

  const renderTableRow = (item, index) => {
    const globalIndex = (currentPage - 1) * itemsPerPage + index + 1;

    // Following / Followers Tab
    if (activeTab === "following" || activeTab === "followers") {
      return (
        <tr key={item.id || index} className="border-b border-gray-100 hover:bg-gray-50">
          <td className="px-6 py-4">
            <div className="text-sm font-medium text-gray-900">#{globalIndex}</div>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <img
                src={item.profileAvatar}
                alt={item.userName}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <div>
                <div className="font-medium text-gray-900">{item.userName}</div>
                <div className="text-sm text-gray-500">{item.email}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="text-sm text-gray-900">
              {new Date(item.followedAt || item.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
            <div className="text-xs text-gray-500">
              {new Date(item.followedAt || item.createdAt).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${item.isOnline ? 'bg-green-500' : 'bg-gray-300'}`} />
              <span className="text-sm text-gray-700">
                {item.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
          </td>
        </tr>
      );
    }

    // Interested / Non-Interested Tab
    if (activeTab === "interested" || activeTab === "nonInterested") {
      return (
        <tr key={item.id || index} className="border-b border-gray-100 hover:bg-gray-50">
          <td className="px-6 py-4">
            <div className="text-sm font-medium text-gray-900">#{globalIndex}</div>
          </td>
          <td className="px-6 py-4">
            <div className="font-medium text-gray-900">{item.name}</div>
          </td>
          <td className="px-6 py-4">
            <div className="text-sm text-gray-900">{item.count} items</div>
          </td>
          <td className="px-6 py-4">
            <div className="text-sm text-gray-900">
              {new Date(item.updatedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </td>
        </tr>
      );
    }

    // Commented Tab
    if (activeTab === "commented") {
      const commentText = item.commentText || "";
      const isLongComment = commentText.length > 100;
      const displayText = isLongComment && expandedComment !== item._id 
        ? `${commentText.substring(0, 100)}...`
        : commentText;

      return (
        <tr key={item.id || index} className="border-b border-gray-100 hover:bg-gray-50">
          <td className="px-6 py-4">
            <div className="text-sm font-medium text-gray-900">#{globalIndex}</div>
          </td>
          <td className="px-6 py-4">
            <div className="font-medium text-gray-900">{item.feed?.title || "Untitled Post"}</div>
            <div className="text-sm text-gray-600 mt-2">
              {displayText}
              {isLongComment && (
                <button
                  onClick={() => setExpandedComment(
                    expandedComment === item._id ? null : item._id
                  )}
                  className="ml-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  {expandedComment === item._id ? "Show less" : "Read more"}
                </button>
              )}
            </div>
          </td>
          <td className="px-6 py-4">
            {item.feed?.contentUrl && (
              <div className="w-20 h-20 rounded-md overflow-hidden">
                <img
                  src={item.feed.contentUrl}
                  alt="Content"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </td>
          <td className="px-6 py-4">
            <div className="text-sm text-gray-900">
              {new Date(item.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </td>
        </tr>
      );
    }

    // Other Tabs (Liked, Disliked, Shared, Downloaded, Hidden)
    const feed = item.feedId || {};
    const contentUrl = feed.contentUrl;
    const contentType = feed.type || "image";
    const actionDate = item.likedAt || item.dislikedAt || item.sharedAt || 
                      item.downloadedAt || item.updatedAt;

    return (
      <tr key={item.id || index} className="border-b border-gray-100 hover:bg-gray-50">
        <td className="px-6 py-4">
          <div className="text-sm font-medium text-gray-900">#{globalIndex}</div>
        </td>
        <td className="px-6 py-4">
          <div className="font-medium text-gray-900">{feed.title || "Untitled Content"}</div>
          <div className="text-sm text-gray-600 mt-1">
            {feed.description || "No description available"}
          </div>
        </td>
        <td className="px-6 py-4">
          {contentUrl && (
            <div className="w-20 h-20 rounded-md overflow-hidden">
              {contentType === "video" ? (
                <div
                  className="w-full h-full bg-gray-100 cursor-pointer flex items-center justify-center"
                  onClick={() => setVideoUrl(contentUrl)}
                >
                  <Play className="w-6 h-6 text-gray-600" />
                </div>
              ) : (
                <img
                  src={contentUrl}
                  alt="Content"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          )}
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">
            {new Date(actionDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
          <div className="text-xs text-gray-500">
            {new Date(actionDate).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Details
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {activeTab === "following" || activeTab === "followers" 
                ? "Profile" 
                : activeTab === "commented" 
                ? "Preview" 
                : "Content"}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => renderTableRow(item, index))}
        </tbody>
      </table>

      {/* Video Popup */}
      {videoUrl && (
        <VideoPopup
          videoUrl={videoUrl}
          onClose={() => setVideoUrl(null)}
        />
      )}
    </div>
  );
}