// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { motion } from "framer-motion";
// import { fetchUserById } from "../../../Services/UserServices/userServices";
// import ProfileHeader from "./ComponentsForIndividualUserProfile/ProfileHeader";
// import PersonalInfoCard from "./ComponentsForIndividualUserProfile/PersonalInfoCard";
// import UserOverviewTabs from "./ComponentsForIndividualUserProfile/UserOverviewTabs";

// const pageMotion = {
//   initial: { opacity: 0, y: -20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: 20 },
//   transition: { duration: 0.4, type: "spring", bounce: 0.15 },
// };

// const contentMotion = {
//   initial: { opacity: 0, scale: 0.98 },
//   animate: { opacity: 1, scale: 1 },
//   transition: { duration: 0.4, ease: "easeOut" },
// };

// export default function IndividualUserProfilePage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { data: user, isLoading, isError } = useQuery({
//     queryKey: ["user", id],
//     queryFn: () => fetchUserById(id),
//     enabled: !!id,
//   });
// console.log(user)
//   const [activeTab, setActiveTab] = useState("Profile");

//   if (isLoading)
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-50">
//         <motion.div {...pageMotion} className="text-gray-600 bg-white p-8 rounded-xl shadow-lg">
//           Loading user details...
//         </motion.div>
//       </div>
//     );

//   if (isError || !user)
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-50">
//         <motion.div {...pageMotion} className="text-red-500 bg-white p-8 rounded-xl shadow-lg">
//           Failed to load user profile.
//         </motion.div>
//       </div>
//     );

//   return (
//     <motion.div
//       {...pageMotion}
//       className="min-h-screen flex bg-gradient-to-br from-blue-50 to-indigo-50 overflow-x-hidden p-4 lg:p-6"
//     >
//       {/* ===== Left Side: Header + Personal Info ===== */}
//       <motion.div
//         initial={{ x: -20, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.4 }}
//         className="w-full lg:w-1/3 flex flex-col gap-4"
//       >
//         {/* Profile Header */}
//         <ProfileHeader user={user} />

//         {/* Personal Info Card */}
//         <PersonalInfoCard user={user} />
//       </motion.div>

//       {/* ===== Right Side: Content Cards / Tabs ===== */}
//       <motion.div
//         {...contentMotion}
//         className="w-full lg:w-2/3 pl-0 lg:pl-6 mt-4 lg:mt-0"
//       >
//         <UserOverviewTabs
//           user={user}
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//         />
//       </motion.div>
//     </motion.div>
//   );
// }




import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { fetchUserById } from "../../../Services/UserServices/userServices";
import ProfileHeader from "./ComponentsForIndividualUserProfile/ProfileHeader";
import PersonalInfoCard from "./ComponentsForIndividualUserProfile/PersonalInfoCard";
import UserStats from "./ComponentsForIndividualUserProfile/UserStats";
import AppliedJobsModal from "./ComponentsForIndividualUserProfile/UserJobs";

const pageMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

export default function IndividualUserProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showAppliedJobs, setShowAppliedJobs] = useState(false);

  const { data: user, isLoading, isError } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading user profile...</p>
        </div>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-md text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to load user</h3>
          <p className="text-gray-600 mb-4">The user profile could not be loaded.</p>
          <button
            onClick={() => navigate("/user/profile/dashboard")}
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Users
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      {...pageMotion}
      className="min-h-screen bg-gray-50"
    >
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Navigation Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/user/profile/dashboard")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Users
          </button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">{user.userName}</h1>
              <p className="text-gray-600 mt-1">User profile and account details</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                Edit
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600">
                Message
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileHeader user={user} />
            <PersonalInfoCard user={user} />
          </div>

          {/* Right Column - Stats & Actions */}
          <div className="space-y-6">
            <UserStats user={user} />
            
            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors flex items-center justify-between">
                  <span>View Followers</span>
                  <span className="text-gray-500 font-medium">{user.followers || 0}</span>
                </button>
                <button className="w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors flex items-center justify-between">
                  <span>View Following</span>
                  <span className="text-gray-500 font-medium">{user.following || 0}</span>
                </button>
                
                {/* View Applied Jobs Button */}
                <button 
                  onClick={() => setShowAppliedJobs(true)}
                  className="w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors flex items-center justify-between"
                >
                  <span>View Applied Jobs</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                    {user.appliedJobs?.length || 0}
                  </span>
                </button>
                
                <button className="w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                  View activity log
                </button>
                <button className="w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                  View all posts
                </button>
                <button className={`w-full text-left px-3 py-2.5 text-sm rounded-md transition-colors ${
                  user.isBlocked 
                    ? 'text-green-700 hover:bg-green-50' 
                    : 'text-red-700 hover:bg-red-50'
                }`}>
                  {user.isBlocked ? 'Unblock user' : 'Block user'}
                </button>
              </div>
            </div>

            {/* Account Timeline */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-medium text-gray-900 mb-4">Account Timeline</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500">Registered</div>
                  <div className="text-sm text-gray-900">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Last Login</div>
                  <div className="text-sm text-gray-900">
                    {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Last Active</div>
                  <div className="text-sm text-gray-900">
                    {user.lastActiveAt ? new Date(user.lastActiveAt).toLocaleDateString() : 'N/A'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applied Jobs Modal */}
      <AnimatePresence>
        {showAppliedJobs && (
          <AppliedJobsModal 
            user={user} 
            onClose={() => setShowAppliedJobs(false)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}