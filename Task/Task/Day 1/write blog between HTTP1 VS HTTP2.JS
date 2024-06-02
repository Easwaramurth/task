HTTP/1.1 and HTTP/2 Main Differences
Launching of the HTTP/2 was an attempt to overcome the limitations of HTTP/1.1 and make it a more efficient web protocol. So, the major differences in these two are mainly the additions or upgrades applied in HTTP/2. Let’s see what they are:

The Background
For better contextualization of the certain alterations that HTTP / 2 made to its precursor, we’ll take a quick look at their basic functionalities and development details first.
    
HTTP / 1.1

HTTP/1.1 addresses this problem by creating a persistent connection between server and client. Until explicitly closed, this connection will remain open. So, the client can use one TCP connection throughout the communication sans interrupting it again and again.

This approach surely ensures good performance, but it also is problematic.

For example – If a request at the queue head cannot retrieve its required resources, it can block all requests behind it. This phenomenon is called head-of-line blocking (HOL blocking).

From the above, we can conclude that multiple TCP connections are essential.

HTTP/2

Considering the bottleneck in the previous scenario, the HTTP/2 developers introduced a binary framing layer. This layer partitions requests and responses in tiny data packets and encodes them. Due to this, multiple requests and responses become able to run parallelly with HTTP/2 and chances of HOL blocking are bleak.

Not only has it solved the HOL blocking problem in HTTP/1.1, but it also concurrent message exchange between the client and the server. This way, both of them can have more control while the connection management quality is boosted too.

The problems of HTTP/1.1 looks resolved to a great extent here. However, at times, multiple data streams demanding the same resource can hinder HTTP/2’s performance. To achieve better performance, HTTP/2 has another way. It has the capability of stream prioritization.

When sending streams in parallel, the client can assign weights (1-256) to its stream to prioritize the responses it demands. Here, the higher the weight, the higher the priority. The serve sets the data retrieval order as per the request’s weight. Programmers can enjoy better control on page rendering process with stream prioritization ability