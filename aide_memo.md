# Symfony

### Installer l'outil symfony

https://symfony.com/download

Mettre à jour sous macos

    brew upgrade symfony-cli

Sous windows

    scoop update symfony-cli

### Installer composer

https://getcomposer.org/download/

Sous windows et si ça ne marche pas, il faut créer un fichier dans **Utilisateurs\SonNomD'Utilisateur\composer.bat** et taper

    php composer.phar %1 %2 %3 %4 %5 %6

Puis ajouter une variable d'environnement windows

### Installer un projet symfony

https://symfony.com/doc/current/setup.html#symfony-lts-versions

    symfony new my_project_name (dernière version minimum)

Options que l'on peut ajouter

    --version=6.4 (version précise 6.4)
    --version=lts (version long time support)
    --full (version de complète pour le web par exemple, mais lourd si on n'a pas besoin de toutes les dépendances)

ou via composer

	composer create-project symfony/skeleton my_project  (version de minimum)
	composer create-project symfony/skeleton:"^6.4" my_project_name
	composer create-project symfony/website-skeleton my_project  (version de complète)
	composer create-project symfony/website-skeleton:”^6.4” my_project_name (version de complète 6.4)

### Ajouter deux bundles symfony

    composer req maker --dev
    composer req profiler --dev

***--dev*** precise à composer lors d'un déploiment en production que ces bundles ne seront pas installés

### Création d'un contrôleur symfony

    symfony console make:controller

ou

    php bin/console make:controller

### Exécuter un projet

https://symfony.com/doc/current/setup/symfony_server.html

    symfony server:start

options

    --port=8000 (change le port par défaut)
    -d (permet d'exécuter en arrière-plan)
    --no-tls (force le mode http)

Dans ce cas, on pourra voir les logs en tapant

    symfony server:log

Et pour arrêter le serveur en arrière-plan

    symfony server:stop 

Via la commande PHP

    php -S 127.0.0.1:8000 -t public

(
-S serveur
ip local
: port
-t dossier ou se trouve son fichier principal php
)

### Quand on partage un projet symfony sur git et que l'on veut le tester ou le mettre en production, le dossier

***var*** et ***vendor*** n'existe plus

Il va falloir obligatoirement taper ça:

    composer i

Ça permet de réinstaller toutes les dépendances du projet

Pour faire une mise à jour des dépendances on pourra taper

    composer u 

### Ajouter le bundle formulaire dans son projet

    composer req form

Documentation sur les formulaires (création, type, validation, etc.) https://symfony.com/doc/current/forms.html

## PhpUnit

PhpUnit permet de tester son code complétement

    composer require --dev phpunit/phpunit

Dans le dossier tests, il faut créer une classe qui a pour suffixe Test, ex : CalculeTest

Les méthodes doivent avoir pour préfixes Test, TestMultiplication

## Base de donnée

### Ajouter le bundle doctrine

    composer req symfony/orm-pack -W

### Cloner le fichier .env en .env.local

Ça sert à sécuriser les données sensibles telles que le **login** et **password** de sa base de donnée ou le *
*app_secret** de symfony

etc.

### Créer ma base de donnée via symfony

    symfony console doctrine:database:create

ou

    php bin/console doctrine:database:create

### Créer une entité

    symfony console make:entity

ou

    php bin/console make:entity

### Ajouter dans notre base de donnée toutes les modifications précédentes

Crée un fichier php avec les requêtes sql

    symfony console make:migration

ou

    php bin/console make:migration

Lance-les requêtes sql

    symfony console doctrine:migrations:migrate

ou

    php bin/console doctrine:migrations:migrate

Autre possibilité de mettre à jour sa base de donnée

    symfony console doctrine:schema:update --dump-sql

ou

    php bin/console doctrine:schema:update --dump-sql

### Créer un CRUD (Create Read Update Delete) après avoir créé son entité

    symfony console make:crud

ou

    php bin/console make:crud	

**--dump-sql** permet de voir toutes les requêtes qu'il va faire une fois qu'on a vérifié alors on peut exécuter les
requêtes

    symfony console doctrine:schema:update --force

ou

    php bin/console doctrine:schema:update --force

**--force** force la mise à jour

### Création d'utilisateur

Création d'un utilisateur en utilisant les paramètres par défaut

    symfony console make:user

ou

    php bin/console make:user

Authentification

    symfony console make:auth

ou

    php bin/console make:auth

Création du formulaire d'enregistrement

    symfony console make:registration-form

ou

    php bin/console make:registration-form

Email de vérification (si on a activé l'option)

    composer require symfonycasts/verify-email-bundle symfony/mailer

Voir plus d'info sur l'envoie d'email https://writecode.fr/tutoriel/envoyer-un-e-mail

Installer l'option "Mot de passe oublié"

    composer require symfonycasts/reset-password-bundle
    symfony console make:reset-password

Modifier le premier role dans la base donnée, dans la table user

    ["ROLE_ADMIN"]

Requête SQL pour le modifier directement

```sql
    UPDATE user
    SET roles = '["ROLE_ADMIN"]'
    WHERE id = 1;
```

Pour permettre de vérifier un type d'utilisateur dans twig, il faudra installer extra-bundle

    composer require twig/extra-bundle 

ou

    composer require symfony/twig-bundle

en twig

```php
    {% if is_granted('ROLE_ADMIN') %} blabla {% endif %}
```

# Divers astuces

## Upload de fichier et le format mime

Voir doc symfony (https://symfony.com/doc/current/controller/upload_file.html)

Analyser le format mime

    composer req symfony/mime

## Paramètre de l'application

https://symfony.com/doc/current/configuration.html#accessing-configuration-parameters

Dans le fichier services.yaml

```yaml
    parameters:
      brochures_directory: '%kernel.project_dir%/public/uploads'
```

Récupération via le controller

```php
    $this->getParameter('brochures_directory')
```

## Paramètre d'environnement (.env)

https://symfony.com/doc/current/configuration/env_var_processors.html

Dans le fichier .env

```dotenv
    PROTOCOLE=http
```

Dans le fichier services.yaml

```yaml
    '%env(PROTOCOLE)%'
```

Dans un contrôleur et twig

```php
class SomeController extends AbstractController 
{
    public function someMethod(Request $request)
    {
        $parameterValue = $request->server->get('env_varname');
        // ...
    }
}

// dans Twig
{{ app.request.server.get('env_varname') }}
```

Dans un service

```php
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;

class MonService 
{
    private $params;

    public function __construct(ContainerBagInterface $params)
    {
        $this->params = $params;
    }

    public function someMethod()
    {
        $parameterValue = $this->params->get('app.parameter_name');
        // ...
    }
}
```

## Configuration d'un serveur apache

C'est obligatoire pour accéder aux routes de symfony en prod

    composer req symfony/apache-pack

## SSL (HTTPS)

Configurer en mode https plutôt que http en
local (https://symfony.com/doc/current/setup/symfony_server.html#enabling-tls)

    symfony server:ca:install

Ou pour le désinstaller

    symfony server:ca:uninstall

# API RestFul ou Ajax (client)

Il faut installer

     composer require symfony/http-client

Ça va nous permettre d'avoir accès à des api restful distante comme Google maps ou de météo ou récupération des
informations sur github ou autre

Voir ce site pour plus d'information

https://symfony.com/doc/current/http_client.html

doc api restful

https://www.gekko.fr/blog/les-bonnes-pratiques-a-suivre-pour-developper-des-apis-rest

# Serializer pour le partage de base de donnée en Json / xml / csv

https://symfony.com/doc/6.4/components/serializer.html#normalizers

    composer require symfony/serializer

Il faut ajouter ce paramètre dans une route de son contrôleur

    NormalizerInterface $normalizer

Puis créer des groupes sur l'entité sélectionnée, on affecte un groupe sur les colonnes que l'on veut sérialiser

    #[Groups('chemise:read')]

Puis dans le retour de son json, il faut remettre le même groupe

exemple

```php
#[Route('/ajaxAll', name: 'ajaxAll', methods: ['GET'])]
public function ajaxAll(ChemiseRepository $chemiseRepository, NormalizerInterface $normalizer) : Response
{
    return $this->json($normalizer->normalize($chemiseRepository->findAll(), null, ['groups' => 'chemise:read']), Response::HTTP_OK);
}
```