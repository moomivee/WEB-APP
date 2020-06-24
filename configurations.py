class BaseConfig(object):
 '''
 Base config class
 '''
 DEBUG = True
 TESTING = False
 TEMPLATES_AUTO_RELOAD = True
class ProductionConfig(BaseConfig):
 """
 Production specific config
 """
 DEBUG = False
 TEMPLATES_AUTO_RELOAD = True
class DevelopmentConfig(BaseConfig):
 """
 Development environment specific configuration
 """
 DEBUG = True
 TESTING = True
 TEMPLATES_AUTO_RELOAD = True