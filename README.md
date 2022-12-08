
# WMWP Cookies Consent Plugin


Plugin for cookies consent. This plugin sets up global window property **wmwp_cookie_consent** to **'denied'**, **'ignored'** and **'accepted'**. 

Cookies saved should condition this global window propoerty (window.wmwp_cookie_consent) and if it exists and is not set to accepted, it should display message about the consent or be disabled at all (like google analytics):
