// const parentVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   function StaggeredList() {
//     return (
//       <motion.div
//         variants={parentVariants}
//         initial="hidden"
//         animate="visible"
//         transition={{ staggerChildren: 0.2 }}
//       >
//         <motion.div variants={childVariants}>Item 1</motion.div>
//         <motion.div variants={childVariants}>Item 2</motion.div>
//         <motion.div variants={childVariants}>Item 3</motion.div>
//         <motion.div variants={childVariants}>Item 4</motion.div>
//       </motion.div>
//     );
//   }

//   export default StaggeredList;
