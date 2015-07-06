Here's an angular project I was working on sin early 2014.. It is a simple Reddit clone where users can post links to websites, vote on those links, and comment on them. It was built with Angular, bootstrap, and firebase (along with the angularfire library) as the data store.

<a href="http://benjaminmbrown.com/bReddit">CLICK HERE to see the app (register and login to utilize functionality)</a>

Here's what the firebase data looks like :

<a href="http://www.benjaminmbrown.com/wp-content/uploads/2014/04/firebase-posts.png"><img class="aligncenter size-thumbnail wp-image-344" src="http://www.benjaminmbrown.com/wp-content/uploads/2014/04/firebase-posts-150x150.png" alt="firebase-posts" width="150" height="150" /></a> <a href="http://www.benjaminmbrown.com/wp-content/uploads/2014/04/firebase-users-detail.png"><img class="aligncenter size-thumbnail wp-image-345" src="http://www.benjaminmbrown.com/wp-content/uploads/2014/04/firebase-users-detail-150x150.png" alt="firebase-users-detail" width="150" height="150" /></a>

Currently, users can:
<ul>
	<li>See all posts when not logged in (but no posting, voting, or commenting)</li>
	<li>Click post comments &amp; view</li>
	<li>Click on user name to see user profile  and all of that user's associated comments and posts</li>
	<li>Register as a new user</li>
	<li>Login as an existing user</li>
	<li>Post new content (when logged in)</li>
	<li>Comment on a post (when logged in)</li>
	<li>Upvote or Downvote a post (when logged in)</li>
</ul>
App Features
<ul>
	<li>Authentication - show/hide views and functionality based on authorization</li>
	<li>Responsive - using bootstrap makes it easy</li>
	<li>Voting - persistent voting - votes stored in db. Front end responds in real time to votes. When you vote, it is bound the the firebase DB and updated in real time.</li>
	<li>Angular directives, filters, services, and controllers - all of these are covered.</li>
</ul>
Stack
<ul>
	<li>Data store - cloud-based RESTful API (firebase) - the interaction between the anglular app consists of 3 way binding using both $http and $resource in angular.</li>
	<li>Real time features enabled using websockets</li>
	<li>Angular JS - used for data binding, MVC structure, and general goodness</li>
	<li>Yeoman - scaffolding platform to quickly build out app with packages</li>
	<li>Bower - keep dependencies organized and updated</li>
	<li>Grunt - build automation</li>
</ul>
TODO
<ul>
	<li>Fix profiles showing empty comments for old/deleted comments</li>
	<li>Add algorithm to push popular posts to top of page</li>
	<li>Pretty up the presentation</li>
	<li>Add some stats/charting</li>
	<li>Add unit tests</li>
	<li>Add e2e tests</li>
	<li>Pagination for posts view</li>
</ul>