// import { useState, useMemo, useCallback, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import {
//   fetchUserFeeds,
//   fetchUserFollowing,
//   fetchUserInterested,
//   fetchUserNonInterested,
//   fetchUserHidden,
//   fetchUserLiked,
//   fetchUserDisliked,
//   fetchUserCommented,
//   fetchUserShared,
//   fetchUserDownloaded,
// } from "../../../Services/UserServices/userServices";
// import UserAnalyticsFilter from "./userAnalyticsFilter";
// import UserAnalyticsTabs from "./UserAnalyticsTabs";
// import UserAnalyticsTable from "./userAnaliticalRenderTabel";

// export default function UserAnalytics() {
//   const { userId } = useParams();
//   const [activeTab, setActiveTab] = useState("feeds");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     type: "all",
//   });

//   const itemsPerPage = 10;

//   const stableParams = useMemo(() => {
//     const params = {};
//     if (filters.startDate) params.startDate = filters.startDate.toISOString().split("T")[0];
//     if (filters.endDate) params.endDate = filters.endDate.toISOString().split("T")[0];
//     if (filters.type && filters.type !== "all") params.type = filters.type;
//     return params;
//   }, [filters, activeTab]);

//   const fetchTabData = useCallback(async () => {
//     switch (activeTab) {
//       case "feeds": return fetchUserFeeds(userId, stableParams);
//       case "following": return fetchUserFollowing(userId, stableParams);
//       case "interested": return fetchUserInterested(userId, stableParams);
//       case "nonInterested": return fetchUserNonInterested(userId, stableParams);
//       case "hidden": return fetchUserHidden(userId, stableParams);
//       case "liked": return fetchUserLiked(userId, stableParams);
//       case "disliked": return fetchUserDisliked(userId, stableParams);
//       case "commented": return fetchUserCommented(userId, stableParams);
//       case "shared": return fetchUserShared(userId, stableParams);
//       case "downloaded": return fetchUserDownloaded(userId, stableParams);
//       default: return [];
//     }
//   }, [activeTab, userId, stableParams]);

//   const { data: tabData = [], isLoading, error } = useQuery({
//     queryKey: ["userAnalyticsTab", userId, activeTab, stableParams],
//     queryFn: fetchTabData,
//     keepPreviousData: true,
//     staleTime: 1000 * 60,
//   });

//   useEffect(() => setCurrentPage(1), [activeTab, filters]);

//   const totalPages = Math.ceil(tabData.length / itemsPerPage);
//   const paginatedData = tabData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   if (isLoading) return <p className="p-6 text-center">Loading {activeTab} data...</p>;
//   if (error) return <p className="p-6 text-center text-red-500">Error loading {activeTab} data</p>;

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <UserAnalyticsFilter
//         initialFilters={filters}
//         activeTab={activeTab}
//         onFilterChange={(newFilters) => setFilters((prev) => ({ ...prev, ...newFilters }))}
//       />

//       <UserAnalyticsTabs activeTab={activeTab} onTabChange={setActiveTab} />

//       <AnimatePresence mode="wait">
//         <motion.div key={activeTab + currentPage + JSON.stringify(stableParams)} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
//           <UserAnalyticsTable
//             activeTab={activeTab}
//             data={paginatedData}
//             currentPage={currentPage}
//             itemsPerPage={itemsPerPage}
//           />
//         </motion.div>
//       </AnimatePresence>

//       <div className="flex justify-end items-center p-4 space-x-2">
//         <motion.button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" whileHover={{ scale: 1.05 }}>Prev</motion.button>
//         <span>Page {currentPage} of {totalPages || 1}</span>
//         <motion.button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages || totalPages === 0} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" whileHover={{ scale: 1.05 }}>Next</motion.button>
//       </div>
//     </div>
//   );
// }









// import { useState, useMemo, useCallback, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import {
//   fetchUserFeeds,
//   fetchUserFollowing,
//   fetchUserFollowers,
//   fetchUserInterested,
//   fetchUserNonInterested,
//   fetchUserHidden,
//   fetchUserLiked,
//   fetchUserDisliked,
//   fetchUserCommented,
//   fetchUserShared,
//   fetchUserDownloaded,
// } from "../../../Services/UserServices/userServices";
// import UserAnalyticsFilter from "./userAnalyticsFilter";
// import UserAnalyticsTabs from "./UserAnalyticsTabs";
// import UserAnalyticsTable from "./userAnaliticalRenderTabel";
// import AnalyticsStats from "./AnalyticsStats";

// export default function UserAnalytics() {
//   const { userId } = useParams();
//   const [activeTab, setActiveTab] = useState("following");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     type: "all",
//   });

//   const itemsPerPage = 10;

//   const stableParams = useMemo(() => {
//     const params = {};
//     if (filters.startDate) params.startDate = filters.startDate.toISOString().split("T")[0];
//     if (filters.endDate) params.endDate = filters.endDate.toISOString().split("T")[0];
//     if (filters.type && filters.type !== "all") params.type = filters.type;
//     return params;
//   }, [filters, activeTab]);

//   const fetchTabData = useCallback(async () => {
//     switch (activeTab) {
//       case "following": return fetchUserFollowing(userId, stableParams);
//       case "followers": return fetchUserFollowers(userId, stableParams);
//       case "interested": return fetchUserInterested(userId, stableParams);
//       case "nonInterested": return fetchUserNonInterested(userId, stableParams);
//       case "hidden": return fetchUserHidden(userId, stableParams);
//       case "liked": return fetchUserLiked(userId, stableParams);
//       case "disliked": return fetchUserDisliked(userId, stableParams);
//       case "commented": return fetchUserCommented(userId, stableParams);
//       case "shared": return fetchUserShared(userId, stableParams);
//       case "downloaded": return fetchUserDownloaded(userId, stableParams);
//       default: return [];
//     }
//   }, [activeTab, userId, stableParams]);

//   const { data: tabData = [], isLoading, error } = useQuery({
//     queryKey: ["userAnalyticsTab", userId, activeTab, stableParams],
//     queryFn: fetchTabData,
//     keepPreviousData: true,
//     staleTime: 1000 * 60,
//   });

//   // Fetch user stats (total counts for each category)
//   const { data: userStats = {} } = useQuery({
//     queryKey: ["userAnalyticsStats", userId],
//     queryFn: async () => {
//       // This would be a single endpoint that returns all stats
//       // For now, we'll simulate it
//       return {
//         following: 245,
//         followers: 189,
//         liked: 342,
//         commented: 156,
//         shared: 89,
//         downloaded: 67,
//       };
//     },
//   });

//   useEffect(() => setCurrentPage(1), [activeTab, filters]);

//   const totalPages = Math.ceil(tabData.length / itemsPerPage);
//   const paginatedData = tabData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading analytics data...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg border border-gray-200 max-w-md text-center">
//           <div className="text-red-500 mb-4">
//             <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
//             </svg>
//           </div>
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to load analytics</h3>
//           <p className="text-gray-600">Unable to fetch user analytics data.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Header */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-semibold text-gray-900">User Analytics</h1>
//           <p className="text-gray-600 mt-1">Track user engagement and activity</p>
//         </div>

//         {/* Stats Overview */}
//         <AnalyticsStats stats={userStats} />

//         {/* Filter Section */}
//         <div className="mb-6">
//           <UserAnalyticsFilter
//             initialFilters={filters}
//             activeTab={activeTab}
//             onFilterChange={(newFilters) => setFilters((prev) => ({ ...prev, ...newFilters }))}
//           />
//         </div>

//         {/* Tabs */}
//         <div className="mb-6">
//           <UserAnalyticsTabs activeTab={activeTab} onTabChange={setActiveTab} />
//         </div>

//         {/* Main Content */}
//         <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//           {/* Table Header */}
//           <div className="px-6 py-4 border-b border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-lg font-medium text-gray-900 capitalize">
//                   {activeTab.replace(/([A-Z])/g, ' $1')}
//                 </h2>
//                 <p className="text-sm text-gray-600 mt-1">
//                   {tabData.length} total items • Page {currentPage} of {totalPages || 1}
//                 </p>
//               </div>
//               <div className="text-sm text-gray-500">
//                 Showing {paginatedData.length} of {tabData.length} items
//               </div>
//             </div>
//           </div>

//           {/* Table Content */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab + currentPage + JSON.stringify(stableParams)}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.2 }}
//             >
//               <UserAnalyticsTable
//                 activeTab={activeTab}
//                 data={paginatedData}
//                 currentPage={currentPage}
//                 itemsPerPage={itemsPerPage}
//               />
//             </motion.div>
//           </AnimatePresence>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//                 Previous
//               </button>
              
//               <div className="flex items-center gap-2">
//                 {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                   let pageNum;
//                   if (totalPages <= 5) {
//                     pageNum = i + 1;
//                   } else if (currentPage <= 3) {
//                     pageNum = i + 1;
//                   } else if (currentPage >= totalPages - 2) {
//                     pageNum = totalPages - 4 + i;
//                   } else {
//                     pageNum = currentPage - 2 + i;
//                   }
                  
//                   return (
//                     <button
//                       key={pageNum}
//                       onClick={() => setCurrentPage(pageNum)}
//                       className={`w-8 h-8 flex items-center justify-center text-sm rounded-md ${
//                         currentPage === pageNum
//                           ? 'bg-blue-600 text-white'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }`}
//                     >
//                       {pageNum}
//                     </button>
//                   );
//                 })}
//                 {totalPages > 5 && (
//                   <span className="text-gray-500 px-2">...</span>
//                 )}
//               </div>
              
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages || totalPages === 0}
//                 className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Next
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }










import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import UserAnalyticsFilter from "./userAnalyticsFilter";
import UserAnalyticsTabs from "./UserAnalyticsTabs";
import UserAnalyticsTable from "./userAnaliticalRenderTabel";
import AnalyticsStats from "./AnalyticsStats";

// Dummy data generator functions
const generateFollowingData = () => [
  {
    id: 1,
    userId: "user001",
    userName: "John Doe",
    email: "john@example.com",
    profileAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    followedAt: "2024-01-15T10:30:00Z",
    isOnline: true
  },
  {
    id: 2,
    userId: "user002",
    userName: "Sarah Smith",
    email: "sarah@example.com",
    profileAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    followedAt: "2024-01-14T14:20:00Z",
    isOnline: false
  },
  {
    id: 3,
    userId: "user003",
    userName: "Mike Johnson",
    email: "mike@example.com",
    profileAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    followedAt: "2024-01-13T09:15:00Z",
    isOnline: true
  }
];

const generateFollowersData = () => [
  {
    id: 1,
    userId: "follower001",
    userName: "Alex Brown",
    email: "alex@example.com",
    profileAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    createdAt: "2024-01-16T11:45:00Z",
    isOnline: true
  },
  {
    id: 2,
    userId: "follower002",
    userName: "Emma Wilson",
    email: "emma@example.com",
    profileAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    createdAt: "2024-01-15T16:30:00Z",
    isOnline: false
  }
];

const generateInterestedData = () => [
  {
    id: 1,
    _id: "int001",
    name: "Technology",
    count: 45,
    updatedAt: "2024-01-15T08:00:00Z"
  },
  {
    id: 2,
    _id: "int002",
    name: "Sports",
    count: 32,
    updatedAt: "2024-01-14T12:30:00Z"
  },
  {
    id: 3,
    _id: "int003",
    name: "Entertainment",
    count: 28,
    updatedAt: "2024-01-13T15:45:00Z"
  }
];

const generateNonInterestedData = () => [
  {
    id: 1,
    _id: "nint001",
    name: "Politics",
    count: 12,
    updatedAt: "2024-01-14T10:20:00Z"
  },
  {
    id: 2,
    _id: "nint002",
    name: "Fashion",
    count: 8,
    updatedAt: "2024-01-13T14:15:00Z"
  }
];

const generateHiddenData = () => [
  {
    id: 1,
    _id: "hid001",
    feedId: {
      title: "How to Learn React in 2024",
      contentUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      type: "image"
    },
    updatedAt: "2024-01-15T11:30:00Z"
  },
  {
    id: 2,
    _id: "hid002",
    feedId: {
      title: "Morning Workout Routine",
      contentUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w-400&h=300&fit=crop",
      type: "video"
    },
    updatedAt: "2024-01-14T09:15:00Z"
  }
];

const generateLikedData = () => [
  {
    id: 1,
    _id: "like001",
    feedId: {
      title: "Beautiful Mountain Landscape",
      contentUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      type: "image",
      description: "Stunning mountain view at sunrise"
    },
    likedAt: "2024-01-16T14:20:00Z"
  },
  {
    id: 2,
    _id: "like002",
    feedId: {
      title: "Cooking Tutorial: Italian Pasta",
      contentUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop",
      type: "video",
      description: "Learn to make authentic Italian pasta"
    },
    likedAt: "2024-01-15T19:30:00Z"
  }
];

const generateDislikedData = () => [
  {
    id: 1,
    _id: "dislike001",
    feedId: {
      title: "New Phone Review",
      contentUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      type: "image"
    },
    dislikedAt: "2024-01-14T13:45:00Z"
  }
];

const generateCommentedData = () => [
  {
    id: 1,
    _id: "comment001",
    feed: {
      title: "The Future of AI",
      contentUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      type: "image"
    },
    commentText: "Great article! The insights about AI ethics are particularly relevant in today's landscape.",
    createdAt: "2024-01-16T10:15:00Z"
  },
  {
    id: 2,
    _id: "comment002",
    feed: {
      title: "Sustainable Living Tips",
      contentUrl: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400&h=300&fit=crop",
      type: "video"
    },
    commentText: "I've been implementing these tips and they really work! Thanks for sharing.",
    createdAt: "2024-01-15T16:40:00Z"
  }
];

const generateSharedData = () => [
  {
    id: 1,
    _id: "share001",
    feedId: {
      title: "Startup Success Stories",
      contentUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type: "image",
      description: "Inspiring stories from successful startups"
    },
    sharedAt: "2024-01-15T12:20:00Z"
  }
];

const generateDownloadedData = () => [
  {
    id: 1,
    _id: "download001",
    feedId: {
      title: "Free UI Design Resources",
      contentUrl: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      type: "image",
      description: "Collection of free design resources"
    },
    downloadedAt: "2024-01-14T15:30:00Z"
  },
  {
    id: 2,
    _id: "download002",
    feedId: {
      title: "Productivity Hacks 2024",
      contentUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      type: "video",
      description: "Boost your productivity with these tips"
    },
    downloadedAt: "2024-01-13T11:10:00Z"
  }
];

export default function UserAnalytics() {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState("following");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    startDate: new Date(),
    endDate: new Date(),
    type: "all",
  });

  const itemsPerPage = 10;

  const dummyData = {
    following: generateFollowingData(),
    followers: generateFollowersData(),
    interested: generateInterestedData(),
    nonInterested: generateNonInterestedData(),
    hidden: generateHiddenData(),
    liked: generateLikedData(),
    disliked: generateDislikedData(),
    commented: generateCommentedData(),
    shared: generateSharedData(),
    downloaded: generateDownloadedData(),
  };

  const tabData = dummyData[activeTab] || [];

  const userStats = {
    following: dummyData.following.length,
    followers: dummyData.followers.length,
    liked: dummyData.liked.length,
    commented: dummyData.commented.length,
    shared: dummyData.shared.length,
    downloaded: dummyData.downloaded.length,
  };

  useEffect(() => setCurrentPage(1), [activeTab, filters]);

  const totalPages = Math.ceil(tabData.length / itemsPerPage);
  const paginatedData = tabData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">User Analytics</h1>
          <p className="text-gray-600 mt-2">Track user engagement and activity metrics</p>
        </div>

        {/* Stats Overview */}
        <AnalyticsStats stats={userStats} />

        {/* Filter Section */}
        <div className="mb-6">
          <UserAnalyticsFilter
            initialFilters={filters}
            activeTab={activeTab}
            onFilterChange={(newFilters) => setFilters((prev) => ({ ...prev, ...newFilters }))}
          />
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <UserAnalyticsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-900 capitalize">
                  {activeTab.replace(/([A-Z])/g, ' $1')}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {tabData.length} total items
                </p>
              </div>
              <div className="text-sm text-gray-600">
                Page {currentPage} of {totalPages || 1}
              </div>
            </div>
          </div>

          {/* Table Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <UserAnalyticsTable
                activeTab={activeTab}
                data={paginatedData}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
              />
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 flex items-center justify-center text-sm rounded-md ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}