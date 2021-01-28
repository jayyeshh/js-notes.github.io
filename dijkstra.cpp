#include<bits/stdc++.h>
#define V 9
using namespace std;

int minDistance(int dist[],int spath[]){
    int min=INT_MAX,min_index;
    for(int i=0;i<V;i++){
	if(spath[i] == false && dist[i]<=min) min=dist[i],min_index=i;
    }
    return min_index;
}

void printPath(int parent[], int j){
     if(parent[j]==-1) return;
     printPath(parent, parent[j]);
     cout<<j;
}

void print(int dist[],int parent[]){
     int src=0;
     cout<<"Vertex\t Distance\t Path";
     for(int i=1;i<V;i++){
	 cout<<"\n"<<src<<"\t"<<i<<"\t"<<dist[i]<<"\t"<<src;
	 printPath(parent,i);
     }
}

void dijkstra(int graph[V][V],int src){
    int dist[V],spath[V],parent[V];
    for(int i=0;i<V;i++) dist[i]=INT_MAX,spath[i]=false;
    dist[src]=0,parent[0]=-1;
    for(int i=0;i<V-1;i++){
        int u=minDistance(dist,spath);
	spath[u]=true;
	for(int v=0;v<V;v++){
	    if(!spath[v] && graph[u][v] && dist[u]!=INT_MAX && dist[v]>dist[u]+graph[u][v]){
		    dist[v]=dist[u]+graph[u][v];
		    dist[v]=dist[u]+graph[u][v];
		    parent[v]=u;
	    }
	}
    }
    print(dist, parent);
}

int main(){
int graph[V][V] = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
       		    { 4, 0, 8, 0, 0, 0, 0, 11, 0 }, 
		    { 0, 8, 0, 7, 0, 4, 0, 0, 2 }, 
		    { 0, 0, 7, 0, 9, 14, 0, 0, 0 }, 
		    { 0, 0, 0, 9, 0, 10, 0, 0, 0 }, 
		    { 0, 0, 4, 14, 10, 0, 2, 0, 0 }, 
		    { 0, 0, 0, 0, 0, 2, 0, 1, 6 }, 
		    { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
       		    { 0, 0, 2, 0, 0, 0, 6, 7, 0 } }; 
	dijkstra(graph,0);
	return 0;
}
