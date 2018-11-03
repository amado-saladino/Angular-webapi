# Angular with REST api service
CRUD operations in Angular with REST Api built in visual studio

## Publish web api service

Open **Users-WebApi** in **Visual Stduio** and publish it to file system to get a publish folder, you may publish this web api to **IIS express**, while publishing the project don not ignore folders in **App_Data**

## Publish to IIS Express

Suppose we have published to a folder **publish** on **desktop**, copy the contents of this folder to a folder **users** under **My Web Sites** folder; the Home directory of IIS Express

## IIS EXpress configuration

To make this web service available across a network, we need to enable requests to IP address of the hosting machine, add this **site** node under **sites** node in IIS Express configuration file:

**My Documents\\IIS Express\\config\\applicationhost.conf**

```
<site name="user-site" id="2" serverAutoStart="true">
                <application path="/">
                    <virtualDirectory path="/" physicalPath="%IIS_SITES_HOME%\Users" />
                </application>
                <bindings>
                    <binding protocol="http" bindingInformation="*:9999:*" />
                </bindings>
            </site>
```

Open command line and run this command:
```sh
iisexpress.exe" /site:user-site
```

## Angular app

You must have [Angular CLI](https://github.com/angular/angular-cli) install

From **users-app** install packages first:

```
npm install
```

and run the application:

```
ng serve --open
```

Good luck