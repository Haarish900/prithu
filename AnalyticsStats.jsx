// import { motion } from "framer-motion";
// import { 
//   Users, 
//   Heart, 
//   MessageSquare, 
//   Share2,
//   Download,
//   Eye,
//   TrendingUp
// } from "lucide-react";

// export default function AnalyticsStats({ stats }) {
//   const statCards = [
//     {
//       title: "Following",
//       value: stats.following || 0,
//       icon: Users,
//       color: "blue",
//       change: "+12%",
//       trend: "up"
//     },
//     {
//       title: "Followers",
//       value: stats.followers || 0,
//       icon: Users,
//       color: "green",
//       change: "+8%",
//       trend: "up"
//     },
//     {
//       title: "Liked",
//       value: stats.liked || 0,
//       icon: Heart,
//       color: "red",
//       change: "+23%",
//       trend: "up"
//     },
//     {
//       title: "Commented",
//       value: stats.commented || 0,
//       icon: MessageSquare,
//       color: "purple",
//       change: "+5%",
//       trend: "up"
//     },
//     {
//       title: "Shared",
//       value: stats.shared || 0,
//       icon: Share2,
//       color: "orange",
//       change: "+15%",
//       trend: "up"
//     },
//     {
//       title: "Downloaded",
//       value: stats.downloaded || 0,
//       icon: Download,
//       color: "indigo",
//       change: "+3%",
//       trend: "up"
//     }
//   ];

//   const getColorClasses = (color) => {
//     switch (color) {
//       case 'blue': return 'bg-blue-100 text-blue-600';
//       case 'green': return 'bg-green-100 text-green-600';
//       case 'red': return 'bg-red-100 text-red-600';
//       case 'purple': return 'bg-purple-100 text-purple-600';
//       case 'orange': return 'bg-orange-100 text-orange-600';
//       case 'indigo': return 'bg-indigo-100 text-indigo-600';
//       default: return 'bg-gray-100 text-gray-600';
//     }
//   };

//   return (
//     <div className="mb-6">
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         {statCards.map((stat, index) => {
//           const Icon = stat.icon;
//           return (
//             <motion.div
//               key={stat.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.05 }}
//               className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
//             >
//               <div className="flex items-center justify-between mb-3">
//                 <div className={`w-10 h-10 rounded-lg ${getColorClasses(stat.color)} flex items-center justify-center`}>
//                   <Icon className="w-5 h-5" />
//                 </div>
//                 <div className={`text-xs font-medium px-2 py-1 rounded-full ${
//                   stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
//                 }`}>
//                   {stat.change}
//                 </div>
//               </div>
//               <div className="text-2xl font-semibold text-gray-900 mb-1">
//                 {stat.value.toLocaleString()}
//               </div>
//               <div className="text-sm text-gray-600">
//                 {stat.title}
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }








import { motion } from "framer-motion";
import { 
  Users, 
  Heart, 
  MessageSquare, 
  Share2,
  Download,
  Eye,
  Tag,
  ThumbsDown,
  XCircle
} from "lucide-react";

export default function AnalyticsStats({ stats }) {
  const statCards = [
    {
      title: "Following",
      value: stats.following || 0,
      icon: Users,
      description: "Users following"
    },
    {
      title: "Followers",
      value: stats.followers || 0,
      icon: Users,
      description: "User followers"
    },
    {
      title: "Interested",
      value: stats.interested || 0,
      icon: Tag,
      description: "Interested categories"
    },
    {
      title: "Not Interested",
      value: stats.nonInterested || 0,
      icon: XCircle,
      description: "Not interested categories"
    },
    {
      title: "Liked",
      value: stats.liked || 0,
      icon: Heart,
      description: "Liked posts"
    },
    {
      title: "Commented",
      value: stats.commented || 0,
      icon: MessageSquare,
      description: "Comments made"
    },
    {
      title: "Shared",
      value: stats.shared || 0,
      icon: Share2,
      description: "Shared posts"
    },
    {
      title: "Downloaded",
      value: stats.downloaded || 0,
      icon: Download,
      description: "Downloads"
    }
  ];

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg border border-gray-200 p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900">
                {stat.title}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {stat.description}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}