# Rules to a model
In this article you will learn about model rules, what is and what is not model, and how to correctly create and insert new functionality into existing directory architecture.

## Rules
- classes always must be in right FQN, if you want to add a new functionality that works with product, your class should be created into `\Shopsys\ShopBundle\Model\Product`
- classes in model must always represent a some kind of behavior of a model unit
- model unit should always be represented by an Entity

## What is and what is not a model
*Model is a system of abstractions that describes selected aspect of a domain.*

That means that everything in a model should be related to some functionality of Domain, in our case, e-commerce.

If you are creating new functionality that could be used, for example, in a portfolio application, like a navigation panel, you should create it as a component, you can read more about components in [Components](../introduction/components.md).

Everything else that is related to our domain should be created into corresponding model unit directory or create new model unit.

## Exceptions to rules
Some concepts in our current model does not follow rules listed above.

## Models that will be moved
* AdminNavigation - will be moved to a components
* AdvancedSearch - will be moved to a components
* Breadcrumb - will be moved to a components
* ContactForm - will be moved to a components
* Cookies - will be moved to a components
* Mail - will be moved to a components
* Module - will be moved to a components
* Sitemap - will be moved to a components
* Localization - will be moved to a components
* LegalConditions - will be moved to a components
* Seo- will be moved to a components
* Slider - will be moved to a components
* Statistics - will be moved to a components

## Model without persisted entity representation
Some models does not have a persisted entity that represents a model unit. For example one of them is Feed, even though it does not have a entity, it is related to a e-commerce domain and because of that we keep it in a model directory.

Units of model without persisted entity:
* Feed
* Newsletter
* Heureka
* ShopInfo

## Model grids
<!--- TODO: add a link to a grid documentation -->
Grids are usable in any different domain, but are located in a `\Shopsys\FrameworkBundle\<MODEL>\Grid`. These classes will be moved to a different folder.

## MultidomainEnityClassProvider
This provider serves for a framework to know which model units should be treated with a localization related to a domain. Since this class is closely related to a model, it is placed there.
