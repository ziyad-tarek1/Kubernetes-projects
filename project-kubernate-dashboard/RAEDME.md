ziad@control:~$ kubectl get ns
NAME                   STATUS   AGE
default                Active   36h
ingress-nginx          Active   35s
kube-node-lease        Active   36h
kube-public            Active   36h
kube-system            Active   36h
kubernetes-dashboard   Active   5h37m
ziad@control:~$ kubectl get all -n kubernetes-dashboard
NAME                                            READY   STATUS    RESTARTS   AGE
pod/dashboard-metrics-scraper-b5fc48f67-jndt4   1/1     Running   0          5h44m
pod/kubernetes-dashboard-779776cb65-dbm2s       1/1     Running   0          5h44m

NAME                                TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
service/dashboard-metrics-scraper   ClusterIP   10.99.135.42   <none>        8000/TCP   5h44m
service/kubernetes-dashboard        ClusterIP   10.102.97.6    <none>        80/TCP     5h44m

NAME                                        READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/dashboard-metrics-scraper   1/1     1            1           5h44m
deployment.apps/kubernetes-dashboard        1/1     1            1           5h44m

NAME                                                  DESIRED   CURRENT   READY   AGE
replicaset.apps/dashboard-metrics-scraper-b5fc48f67   1         1         1       5h44m
replicaset.apps/kubernetes-dashboard-779776cb65       1         1         1       5h44m
ziad@control:~$ kubectl get all