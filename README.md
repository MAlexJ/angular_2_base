#Step 1
```bash
$ npm install
```

#Step 2 __
```bash
$ npm install -g lite-server

# To run:
$ lite-server
```

1) Router
Link: http://stackoverflow.com/questions/34535163/angular-2-router-no-base-href-set
Description:
<head>
  <base href="/">
  ...
</head>

>= Angular2 RC.6

import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [routing /* or RouterModule */], 
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
]); 

