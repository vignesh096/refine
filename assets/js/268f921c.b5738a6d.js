"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});n(67294);var o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={title:"A Guide for Delete Pods from Kubernetes Nodes - kubectl delete",description:"We'll learn how to delete pods from Kubernetes nodes using the kubectl delete command.",slug:"kubectl-delete-pod",authors:"muhammad_khabbab",tags:["kubernetes","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/social.png",hide_table_of_contents:!1},d=void 0,s={permalink:"/blog/kubectl-delete-pod",source:"@site/blog/2023-11-20-kubeclt-delete-pod.md",title:"A Guide for Delete Pods from Kubernetes Nodes - kubectl delete",description:"We'll learn how to delete pods from Kubernetes nodes using the kubectl delete command.",date:"2023-11-20T00:00:00.000Z",formattedDate:"November 20, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:11.225,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"A Guide for Delete Pods from Kubernetes Nodes - kubectl delete",description:"We'll learn how to delete pods from Kubernetes nodes using the kubectl delete command.",slug:"kubectl-delete-pod",authors:"muhammad_khabbab",tags:["kubernetes","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/social.png",hide_table_of_contents:!1},prevItem:{title:"TypeScript vs JavaScript - A Detailed Comparison",permalink:"/blog/javascript-vs-ts"},nextItem:{title:"Using SVGs in React",permalink:"/blog/react-svg"},relatedPosts:[{title:"GraphQL vs REST - Key Differences and Use Cases",description:"We'll explore the key differences between GraphQL and REST, and discuss the use cases where each approach excels.",permalink:"/blog/graphql-vs-rest",formattedDate:"December 3, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:14.74,date:"2023-12-03T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"We'll compare both in terms of features, pros, and cons and in which scenario you should prefer one over another.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"May 25, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:12.87,date:"2023-05-25T00:00:00.000Z"},{title:"git diff - Comparing Changes in Git",description:"We'll explore Git's 'git diff' which helps you track changes throughout your working directory, commits, and branches.",permalink:"/blog/git-diff-command",formattedDate:"May 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.915,date:"2023-05-12T00:00:00.000Z"}],authorPosts:[{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"November 3, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.02,date:"2022-11-03T00:00:00.000Z"},{title:"Unraveling the Kubernetes ImagePullBackOff Error",description:"We'll discuss the ImagePullBackOff error in Kubernetes, its causes, and how to resolve it.",permalink:"/blog/kubernetes-imagepullbackoff-error",formattedDate:"November 4, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.275,date:"2023-11-04T00:00:00.000Z"},{title:"A complete guide to Kubectl exec",description:"We'll go over the basics of kubectl exec, including its syntax, parameters, and how to use it to interact with containers in a Kubernetes pod.",permalink:"/blog/kubectl-exec-command",formattedDate:"October 19, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.53,date:"2023-10-19T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"What is a pod in Kubernetes",id:"what-is-a-pod-in-kubernetes",level:2},{value:"Why one might need to delete pods",id:"why-one-might-need-to-delete-pods",level:2},{value:"Precautions Before Deleting a Pod",id:"precautions-before-deleting-a-pod",level:2},{value:"Importance of ensuring application resilience",id:"importance-of-ensuring-application-resilience",level:3},{value:"Dangers of hurriedly deleting pods without checks",id:"dangers-of-hurriedly-deleting-pods-without-checks",level:3},{value:"Deleting All Pods from a Node",id:"deleting-all-pods-from-a-node",level:2},{value:"Explanation of <code>kubectl drain</code> command",id:"explanation-of-kubectl-drain-command",level:3},{value:"Verifying the node&#39;s pods before and after the drain",id:"verifying-the-nodes-pods-before-and-after-the-drain",level:2},{value:"Handling special cases (NoExecute and DaemonSet pods)",id:"handling-special-cases-noexecute-and-daemonset-pods",level:3},{value:"The <code>--force</code> flag and its implications",id:"the---force-flag-and-its-implications",level:3},{value:"Removing the node from the cluster",id:"removing-the-node-from-the-cluster",level:3},{value:"Individually Deleting Pods from Nodes",id:"individually-deleting-pods-from-nodes",level:2},{value:"Why you might want a more controlled approach",id:"why-you-might-want-a-more-controlled-approach",level:3},{value:"Use of the <code>kubectl cordon</code> command",id:"use-of-the-kubectl-cordon-command",level:3},{value:"Deleting individual pods",id:"deleting-individual-pods",level:3},{value:"Handling Deployment and ReplicaSet pods",id:"handling-deployment-and-replicaset-pods",level:2},{value:"Working with StatefulSet pods",id:"working-with-statefulset-pods",level:2},{value:"Bringing Pods Back onto Nodes",id:"bringing-pods-back-onto-nodes",level:2},{value:"The <code>kubectl uncordon</code> command",id:"the-kubectl-uncordon-command",level:3},{value:"Verifying pods being scheduled back onto the node",id:"verifying-pods-being-scheduled-back-onto-the-node",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-a-pod-in-kubernetes"},"What is a pod in Kubernetes"),(0,o.kt)("p",null,"Kubernetes has the smallest execution unit, called a pod. A pod includes one or more applications. Pods are ephemeral by nature, so if a pod fails (or the node on which it is executing fails), Kubernetes has an automatic way of creating new replicas of that pod in order to keep the operation running. Within the Kubernetes system, containers, such as Docker containers, that are in the same pod will share the same compute resources."),(0,o.kt)("p",null,"Steps we'll cover in this post:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-a-pod-in-kubernetes"},"What is a pod in Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-one-might-need-to-delete-pods"},"Why one might need to delete pods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#precautions-before-deleting-a-pod"},"Precautions Before Deleting a Pod"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#importance-of-ensuring-application-resilience"},"Importance of ensuring application resilience")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dangers-of-hurriedly-deleting-pods-without-checks"},"Dangers of hurriedly deleting pods without checks")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#deleting-all-pods-from-a-node"},"Deleting All Pods from a Node"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#explanation-of-kubectl-drain-command"},"Explanation of ",(0,o.kt)("inlineCode",{parentName:"a"},"kubectl drain")," command")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#verifying-the-nodes-pods-before-and-after-the-drain"},"Verifying the node's pods before and after the drain"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-special-cases-noexecute-and-daemonset-pods"},"Handling special cases (NoExecute and DaemonSet pods)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the---force-flag-and-its-implications"},"The ",(0,o.kt)("inlineCode",{parentName:"a"},"--force")," flag and its implications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#removing-the-node-from-the-cluster"},"Removing the node from the cluster")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#individually-deleting-pods-from-nodes"},"Individually Deleting Pods from Nodes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-you-might-want-a-more-controlled-approach"},"Why you might want a more controlled approach")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#use-of-the-kubectl-cordon-command"},"Use of the ",(0,o.kt)("inlineCode",{parentName:"a"},"kubectl cordon")," command")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#deleting-individual-pods"},"Deleting individual pods")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-deployment-and-replicaset-pods"},"Handling Deployment and ReplicaSet pods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#working-with-statefulset-pods"},"Working with StatefulSet pods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#bringing-pods-back-onto-nodes"},"Bringing Pods Back onto Nodes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-kubectl-uncordon-command"},"The ",(0,o.kt)("inlineCode",{parentName:"a"},"kubectl uncordon")," command")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#verifying-pods-being-scheduled-back-onto-the-node"},"Verifying pods being scheduled back onto the node"))))),(0,o.kt)("h2",{id:"why-one-might-need-to-delete-pods"},"Why one might need to delete pods"),(0,o.kt)("p",null,"You may have to delete pods from one or more worker nodes for a variety of reasons, such as debugging node issues, upgrading and removing nodes from the cluster if you are deploying container applications using Kubernetes. In some cases, it is necessary to delete your pod from the node in order to manually scale down a cluster for testing purposes or sometimes when all pods need to be removed from any specific node due to maintenance."),(0,o.kt)("h2",{id:"precautions-before-deleting-a-pod"},"Precautions Before Deleting a Pod"),(0,o.kt)("h3",{id:"importance-of-ensuring-application-resilience"},"Importance of ensuring application resilience"),(0,o.kt)("p",null,"The provision of a consistent and reliable service that will satisfy user expectations and needs shall help to improve customer satisfaction and loyalty. If the service is reliable and available, it will be less likely that customers will switch to competitors or complain. A reduction in the frequency and effect of failures and interruptions, helps to reduce operating costs and risks. Failures may also result in revenue loss, data loss, security breach or reputational damage. These effects may be avoided or mitigated through resilient applications that can recover quickly from a failure and restore normal operations."),(0,o.kt)("h3",{id:"dangers-of-hurriedly-deleting-pods-without-checks"},"Dangers of hurriedly deleting pods without checks"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deleting pods without first performing checks might cause your service to go down or perform poorly, especially if you delete too many pods at once or delete crucial pods that are not replicated."),(0,o.kt)("li",{parentName:"ol"},"You may lose or otherwise damage your data if you remove the pod without checking it, especially in cases where there is no backup or replication of stored and processed data."),(0,o.kt)("li",{parentName:"ol"},"Deleting pods without performing any checks can lead to issues and failures propagating throughout your system, particularly if the deleted pods are connected to a communication network or a dependency chain.")),(0,o.kt)("h2",{id:"deleting-all-pods-from-a-node"},"Deleting All Pods from a Node"),(0,o.kt)("h3",{id:"explanation-of-kubectl-drain-command"},"Explanation of ",(0,o.kt)("inlineCode",{parentName:"h3"},"kubectl drain")," command"),(0,o.kt)("p",null,"A drain command is used to gracefully remove a node from service, evicting all pods running on that node and scheduling them for other available nodes while preventing new Pods from being scheduled at that time. To avoid any possible data loss or disruption to running applications, the kubectl drain command ensures that the pods are not abruptly terminated. This enables node maintenance and troubleshooting to be planned without affecting the availability of applications."),(0,o.kt)("p",null,"For Example, if we want to drain minikube node having the pods managed by '",(0,o.kt)("strong",{parentName:"p"},"DaemonSet"),"' Controller (we used ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2013ignore-daemonsets")," Flag) and other pods which are not managed by any controller (we used ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2013force")," flag), we will execute the command below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl drain minikube --ignore-daemonsets --force")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Above Command will return the following output:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_1.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"verifying-the-nodes-pods-before-and-after-the-drain"},"Verifying the node's pods before and after the drain"),(0,o.kt)("p",null,"It is critical to verify the node's pods before and after the drain to ensure that the pods are correctly relocated to other nodes and that the service is not disturbed. Before and after the drain, we can use the command below to list the pods and their node assignments for all namespaces:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods --all-namespaces -o wide")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As you can see in the output below, the above command will return the name, namespace, status, restarts, age, IP, node, and nominated node for each pod. We can see which pods were evicted from the drained node and which nodes they were assigned to by comparing the outputs:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_2.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"handling-special-cases-noexecute-and-daemonset-pods"},"Handling special cases (NoExecute and DaemonSet pods)"),(0,o.kt)("p",null,"Pods with a toleration of the node are NoExecute pods. If they do not have a ",(0,o.kt)("strong",{parentName:"p"},"toleranceSecond")," value that indicates how long the taint can be tolerated, those pods may stay on the node for an indefinite period of time. You must use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," flag with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl drain"),", which will delete the pods without waiting for graceful termination, to force the removal of these pods.\nA daemonSet controller manages pods, ensuring that a copy of each pod executes on every node in the cluster. ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl drain")," does not evict DaemonSet pods by default unless you specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-daemonsets")," flag, which ignores the pods and continues the drain."),(0,o.kt)("h3",{id:"the---force-flag-and-its-implications"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"--force")," flag and its implications"),(0,o.kt)("p",null,"When you drain a node with pods that are managed by ReplicationController, ReplicaSet, Job, DaemonSet, or StatefulSet, the corresponding controller will regenerate those pods. As a result, if you attempt to drain a node that contains such a pod, you will receive an error message as a warning. However, in order to execute the drain operation in this case, you need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," option."),(0,o.kt)("h3",{id:"removing-the-node-from-the-cluster"},"Removing the node from the cluster"),(0,o.kt)("p",null,"For gracefully removing the node, once the node got drained and not running any deployment, pod, statefulSet or DaemonSets, then you can follow the syntax below for the command to delete that node from the cluster:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl delete node [NAME_OF_NODE]")),(0,o.kt)("p",null,"For Example, we have a node with the name '",(0,o.kt)("strong",{parentName:"p"},"minikube"),"', and we have drained the node already. So, now we will run the following command to remove it from the cluster:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl delete node minikube")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The above command will return the following output:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_3.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"individually-deleting-pods-from-nodes"},"Individually Deleting Pods from Nodes"),(0,o.kt)("h3",{id:"why-you-might-want-a-more-controlled-approach"},"Why you might want a more controlled approach"),(0,o.kt)("p",null,"A controlled approach for deleting pods is important because it allows better fault tolerance, which ensures that node issues have little impact on service availability and also helps in optimizing resource utilization by releasing resources on a particular node, helping to prevent degradation."),(0,o.kt)("h3",{id:"use-of-the-kubectl-cordon-command"},"Use of the ",(0,o.kt)("inlineCode",{parentName:"h3"},"kubectl cordon")," command"),(0,o.kt)("p",null,"A reliable method for removing pods from nodes in a controlled manner is executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl cordon")," command. This powerful command designates a node as unschedulable, ensuring that no additional pods will be allocated to it. Yet, the current pods still on that node will remain active and successfully handle incoming requests. This practical approach enables you to effectively delete pods from the node without compromising the accessibility of your cluster.\nFor Example, we will use the command below to mark our node (i.e., minikube) unschedulable:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl cordon minikube")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Above Command will return the following output:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_4.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"deleting-individual-pods"},"Deleting individual pods"),(0,o.kt)("p",null,"Once a node is cordon, you can delete single pods from that node through the kubectl delete pod command. You can Delete a pod by name ","[",(0,o.kt)("em",{parentName:"p"},"and optionally by namespace"),"]",". kubectl get pods command with ",(0,o.kt)("inlineCode",{parentName:"p"},"--field-selector")," allows you to list the pods that are in a particular node.\nFor Example, First, we list the Pods in our 'minikube' node using the following command:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods --all-namespaces --field-selector spec.nodeName=minikube")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The above command will return the output below:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_5.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Suppose in the list of pods, we want to delete the pod named '",(0,o.kt)("strong",{parentName:"p"},"my-demo-pod"),"'. We will execute the command below to individually delete that specific pod from the minikube node:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl delete pod my-demo-pod")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The above command will return the following output:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_6.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"handling-deployment-and-replicaset-pods"},"Handling Deployment and ReplicaSet pods"),(0,o.kt)("p",null,"A deleted pod will be re-created in case it belonged to a Deployment or ReplicaSet and scheduled to another node. In turn, this maintains the required number of replicas. On the other hand, in order to delete all the deployment or ReplicaSet pods from a node, you need to scale up the replica count before deleting the pods and then scale down the replica count. It will ensure that the pods are not scheduled back onto the same node."),(0,o.kt)("p",null,"For Example, we have a deployment named '",(0,o.kt)("strong",{parentName:"p"},"example-deployment"),"', we will scale up the replica count using the command below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl scale deployment example-deployment --replicas=4")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The above Command will return the output below:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_7.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now we will list the pods of the '",(0,o.kt)("strong",{parentName:"p"},"example deployment"),"' that comes under the '",(0,o.kt)("strong",{parentName:"p"},"example-namespace"),"' on the minikube node by running the command below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -l app=nginx -n example-namespace --field-selector spec.nodeName=minikube")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The above Command will return the output below:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_8.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now, we will delete the pod(my-demo-deployment-cbdccf466-p8zjf) listed in the output above and then by running the command below, we will see that the pod is recreated:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -l app=nginx")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The below output shows that the pod is recreated in the same minikube node(as we are using the single-node Kubernetes environment):")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_9.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now, we will scale down the replica count of 'example-deployment' by using the command below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl scale deployment example-deployment --replicas=3")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The below output shows that the replica count has been scaled down:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_10.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"working-with-statefulset-pods"},"Working with StatefulSet pods"),(0,o.kt)("p",null,"However, it is important to note that StatefulSet pods behave differently when deleting them. Deleting the StatefulSet pod does not automatically trigger rescheduling to another node. Instead, it is replicated at the same node with the same name and ordinal index. The reason for this is that StatefulSet pods have a unique and persistent identifier within the cluster. Hence, if you intend to remove pods of StatefulSet from a node, start by decreasing the size of the StatefulSet by scaling it down to reduce the number of replicas and then delete the pods."),(0,o.kt)("p",null,"Suppose we have a StatefulSet named '",(0,o.kt)("strong",{parentName:"p"},"demo-statefulset"),"' having 3 pods, and we will scale down the replica count to 2 by running the command below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl scale statefulset demo-statefulset --replicas=2")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The output below confirms that 'demo-statefulset' has been scaled down to 2 Replicas:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_11.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"After listing the StatefulSet pod in the minikube node, we can see two pods, '",(0,o.kt)("strong",{parentName:"p"},"demo-statefulset-0"),"' and '",(0,o.kt)("strong",{parentName:"p"},"demo-statefulset-1"),"'. We will delete the '",(0,o.kt)("strong",{parentName:"p"},"demo-statefulset-0"),"' pod by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl delete pod demo-statefulset-0")," and verify that '",(0,o.kt)("strong",{parentName:"p"},"demo-statefulset-0"),"' is deleted and not recreated on the minikube node by running the command below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -l app=web-app")),(0,o.kt)("h2",{id:"bringing-pods-back-onto-nodes"},"Bringing Pods Back onto Nodes"),(0,o.kt)("h3",{id:"the-kubectl-uncordon-command"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"kubectl uncordon")," command"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl uncordon")," command to mark a node as schedulable and ready to receive new pods to be scheduled. Pods can return to a node that was previously cordoned or drained as well. For Example, if we have previously cordon the minikube node and its status was '",(0,o.kt)("strong",{parentName:"p"},"SchedulingDisabled"),"', we can execute the command below to mark the minikube node as schedulable:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl uncordon minikube")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The above Command will return the following output:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_12.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"verifying-pods-being-scheduled-back-onto-the-node"},"Verifying pods being scheduled back onto the node"),(0,o.kt)("p",null,"After you uncordon a node, you can verify that pods are being scheduled back onto the node using the below command. It will show you the pods that are running on a specific node."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After running the command above, you can see in the output below that the 'demo-deployment' pod, which was deleted from the 'minikube' node when it was cordoned, has been rescheduled and recreated on the 'minikube' node after it was uncordon:")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-19-kubectl-delete-pod/KD_13.png",alt:"kubectl delete"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Understanding the complexities of pod deletions in a Kubernetes environment is critical for ensuring your applications stay resilient and reliable. Although Kubernetes has been designed to handle pod termination cases smoothly, quick or blinded pod removal might cause service downtime, data loss, and potential cascading failures. The manner in which various pods are deleted varies on the type(Deployments, StatefulSets, or DaemonSets) they belong. To avoid scheduling the pods on the same node again, techniques such as reducing the number of replicas before deletion must be adopted."),(0,o.kt)("p",null,"It is highly recommended that before adopting pod deletion techniques in a production Kubernetes cluster, you practice and experiment in a safe, non-production environment such as a development or staging cluster. This hands-on experience allows you to become familiar with the complexities of pod management and the implications of various deletion actions. You can improve your skills, test your understanding of pod behaviors, and fine-tune your deletion procedures by practicing in a controlled environment. Careful preparation in a secure environment is essential for Kubernetes pod management success."))}m.isMDXComponent=!0}}]);